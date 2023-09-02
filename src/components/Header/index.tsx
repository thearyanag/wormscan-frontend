import { Container, HStack, Heading } from '@/utils/chakra';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <>
      <Container
        display={'flex'}
        mt={3}
        h={'16'}
        maxW={'7xl'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <HStack h={'full'}>
          <Image
            width={40}
            height={40}
            src={'/imgs/logo.svg'}
            alt={'Wormscan'}
            priority
          />
          <Heading color={'white'} fontSize={'2xl'}>
            WormScan
          </Heading>
        </HStack>
        <HStack gap={5} color={'white'} fontWeight={500}>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>Transactions</Link>
        </HStack>
      </Container>
    </>
  );
};
