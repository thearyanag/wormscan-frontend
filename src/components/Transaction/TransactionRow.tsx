import { Button, HStack, Td, Text, Tr, VStack } from '@/utils/chakra';
import Image from 'next/image';
import React from 'react';

const Icons = () => {
  return (
    <HStack>
      <Image
        src={'/token/Ethereum ETH.svg'}
        width={30}
        height={30}
        alt="ethereum icon"
        priority
      />
      <VStack gap={0} align={'start'}>
        <Text color={'white'} fontSize={'sm'}>
          Ethereum
        </Text>
        <HStack>
          <Text fontSize={'sm'} color={'#7A4EF3'}>
            dbbb7s....d2f89
          </Text>
          <Button
            display={'flex'}
            justifyContent={'center'}
            size={'xs'}
            variant={'unstyled'}
          >
            <Image
              src={'/imgs/copyIcon.svg'}
              alt="copy icon"
              width={15}
              height={15}
              priority
            />
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export const TransactionRow = () => {
  return (
    <>
      <Tr>
        <Td>
          <Text fontSize={'sm'} color={'#7A4EF3'}>
            dbbb7s....d2f89
          </Text>
        </Td>
        <Td py={1} textAlign={'start'}>
          <Icons />
        </Td>
        <Td>
          <Image
            src={'/imgs/arrowTable.svg'}
            alt="arrow table"
            width={100}
            height={10}
          />
        </Td>
        <Td py={1} textAlign={'start'}>
          <Icons />
        </Td>
        <Td>
          <Text color={'white'} fontSize="sm" fontWeight={500}>
            12.6 USDC
          </Text>
        </Td>
        <Td>
          <Text color={'white'} fontSize="sm" fontWeight={500}>
            Portal Token Bridge
          </Text>
        </Td>
        <Td>
          <VStack gap={0}>
            <Text color={'#10B981'} fontSize="sm" fontWeight={500}>
              Received
            </Text>
            <HStack align={'center'} gap={1}>
              <Image
                src={'/imgs/statusIcon.svg'}
                alt="status icon"
                width={15}
                height={15}
              />
              <Text color={'#AAAAAA'} fontSize="sm" fontWeight={500}>
                1m 1s
              </Text>
            </HStack>
          </VStack>
        </Td>
        <Td>
          <Text color={'white'} fontSize="sm" fontWeight={500}>
            1 minute ago
          </Text>
        </Td>
      </Tr>
    </>
  );
};
