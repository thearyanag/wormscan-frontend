import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  TagLeftIcon,
  Text,
} from '@/utils/chakra';
import Image from 'next/image';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const TxLayout = ({ children }: Props) => {
  return (
    <>
      <Box w="full" maxW={'7xl'} mx="auto" px={4}>
        <HStack
          w="full"
          justify={'space-between'}
          flexDirection={['column', 'column', 'row', 'row']}
          mt={10}
        >
          <Text color={'white'} fontSize={20} fontWeight={500}>
            Transaction Details
          </Text>
          <InputGroup
            border={'1px solid #16161D'}
            bg={'rgba(255, 255, 255, 0.15)'}
            borderRadius={'10px'}
            maxW={'xl'}
            color={'#B5A7DE'}
          >
            <Input
              border={'none'}
              _focus={{
                border: 'none',
                outline: 'none',
              }}
              _focusVisible={{
                border: 'none',
                outline: 'none',
              }}
              _focusWithin={{
                border: 'none',
                outline: 'none',
              }}
              _active={{
                border: 'none',
                outline: 'none',
              }}
              _hover={{
                border: 'none',
                outline: 'none',
              }}
              _placeholder={{
                color: '#B5A7DE',
              }}
              placeholder="Search VAA, address and transactions"
            />
            <InputRightElement>
              <Button
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                variant={'unstyled'}
              >
                <Image
                  alt="search"
                  width={23}
                  height={23}
                  priority
                  src={'/imgs/search.svg'}
                />
              </Button>
            </InputRightElement>
          </InputGroup>
        </HStack>
        <HStack my={4}>
          <Tag borderRadius={'full'} color={'white'} bg={'#10B981'}>
            <TagLeftIcon>
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="3" fill="white" />
              </svg>
            </TagLeftIcon>
            Received
          </Tag>
          <Tag borderRadius={'full'} bg="#3B82F6" color={'white'}>
            Transfer With Payload
          </Tag>
        </HStack>
        <HStack gap={3}>
          <Box>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8Z"
                fill="#AAAAAA"
              />
              <path
                d="M8.75 5C8.75 4.58579 8.41421 4.25 8 4.25C7.58579 4.25 7.25 4.58579 7.25 5V8C7.25 8.41421 7.58579 8.75 8 8.75H11C11.4142 8.75 11.75 8.41421 11.75 8C11.75 7.58579 11.4142 7.25 11 7.25H8.75V5Z"
                fill="#AAAAAA"
              />
            </svg>
          </Box>
          <Text color={'#10B981'} fontSize={16} fontWeight={500}>
            Recieved in 11 minutes 10 seconds
          </Text>
        </HStack>
        {children}
      </Box>
    </>
  );
};

export default TxLayout;
