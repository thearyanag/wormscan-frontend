'use client';
import { TransactionTable } from '@/components/Transaction/TransactionTable';
import {
  Button,
  Container,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@/utils/chakra';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Transactions = () => {
  const [value, setValue] = useState<string>('');
  const router = useRouter();
  return (
    <>
      <Container mt={10} maxW={'7xl'}>
        <HStack
          w="full"
          justify={'space-between'}
          flexDirection={['column', 'column', 'row', 'row']}
        >
          <Text
            color={'white'}
            fontWeight={500}
            fontSize={['2xl', '2xl', 'xl', 'xl']}
          >
            Transactions
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
              onChange={(e) => setValue(e.target.value)}
              _focus={{
                border: 'none',
                outline: 'none',
              }}
              pr={10}
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
            <InputRightElement
              onClick={() => {
                const searchUrl = `/transactions/${value}`;
                router.push(searchUrl);
              }}
            >
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
        <TransactionTable />
      </Container>
    </>
  );
};

export default Transactions;
