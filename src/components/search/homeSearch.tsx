'use client';
import {
  Box,
  Button,
  Container,
  Input,
  InputGroup,
  InputRightElement,
} from '@/utils/chakra';
import Image from 'next/image';
import React from 'react';
import { useRef } from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const HomeSearch = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <Container w={'full'} maxW={'7xl'}>
        <Box position={'relative'} maxW={'xl'} mx="auto" color={'#B5A7DE'}>
          <InputGroup
            bg={'#170F30'}
            boxShadow={'5px 4px 20px 0px rgba(0, 0, 0, 0.25)'}
            border={'2px solid #6E4BD0'}
            px={5}
            borderRadius={'10px'}
          >
            <Input
              id="searchInput"
              ref={searchInputRef}
              variant={'flushed'}
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
              placeholder="Search VAA and transactions"
            />
            <InputRightElement>
              <Button
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                variant={'unstyled'}
                onClick={() => {
                  let searchValue = searchInputRef?.current?.value || '';
                  const searchUrl = `/transactions/${searchValue}`;
                  router.push(searchUrl);
                }}
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
          {/* <Box
            bg={'#3F00C3'}
            filter={'blur(100px)'}
            position={'absolute'}
            h={'10rem'}
            borderRadius={'full'}
            w={'full'}
            border={'1px solid white'}
          />
          <Box
            position={'absolute'}
            filter={'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}
            w={'full'}
          /> */}
        </Box>
      </Container>
    </>
  );
};
