import { Box, Container, HStack, Text, VStack } from '@/utils/chakra';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CTALinks } from './cta';

export const Footer = () => {
  return (
    <>
      <Box
        w={'full'}
        h={{
          xl: '16rem',
          base: '24rem',
        }}
        bg={'rgba(255, 255, 255, 0.05)'}
      >
        <Container
          maxW={{
            xl: '7xl',
            base: '5xl',
            md: '4xl',
            sm: 'xl',
          }}
          display={'flex'}
          justifyContent={{
            xl: 'space-between',
            base: 'space-between',
            md: 'center',
            sm: 'center',
          }}
          flexDirection={{
            xl: 'row',
            base: 'column',
          }}
          gap={5}
          h={'full'}
          p={10}
        >
          <VStack
            h={{
              xl: 'full',
              base: 'auto',
            }}
            justify={{
              xl: 'space-between',
              base: 'start',
            }}
            align={'start'}
          >
            <VStack align={'start'}>
              <Link href={'/'}>
                <HStack>
                  <Image
                    width={25}
                    height={25}
                    src={'/imgs/logo.svg'}
                    alt={'Wormscan'}
                    priority
                  />
                  <Text fontSize={'xl'} color={'white'} fontWeight={500}>
                    Wormscan
                  </Text>
                </HStack>
              </Link>
              <Text color={'#6B7280'}>Your friendly cross-chain explorer</Text>
            </VStack>
            <Text color={'#4B5563'}>© 2523 | Wormscan</Text>
          </VStack>
          <HStack align={'start'}>
            <CTALinks />
          </HStack>
          <HStack align={'start'} gap={5}>
            <Link href={'/discord'}>
              <Image
                src={'/imgs/discord.svg'}
                alt={'discord'}
                width={25}
                height={25}
              />
            </Link>
            <Link href={'/twitter'}>
              <Image
                src={'/imgs/twitter.svg'}
                alt={'twitter'}
                width={25}
                height={25}
              />
            </Link>
          </HStack>
        </Container>
      </Box>
    </>
  );
};
