import { Box, Container, HStack, Text, VStack, Wrap } from '@/utils/chakra';
import Image from 'next/image';
import React from 'react';

export const AvgTime = () => {
  return (
    <>
      <Container
        maxW={['full', 'full', '2xl', '7xl']}
        borderRadius={12}
        bg={'rgba(255, 255, 255, 0.05)'}
        w={'full'}
        boxShadow={'0px 16px 24px 0px rgba(0, 0, 0, 0.15)'}
      >
        <VStack align={'start'} w="full" p={5}>
          <VStack align={'start'} gap={1}>
            <Text color={'white'} fontSize={20} fontWeight={800}>
              Average transaction time
            </Text>
            <Text color={'#6B7280'} fontSize={16} fontWeight={400}>
              Average time spent to pass a message from a chain.
            </Text>
          </VStack>

          <Wrap>
            <HStack
              gap={3}
              bg={'rgba(255, 255, 255, 0.05)'}
              borderRadius={8}
              px={4}
              py={2}
            >
              <Box>
                <Image
                  src={'/token/Ethereum ETH.svg'}
                  width={30}
                  height={30}
                  alt="ethereum icon"
                  priority
                />
              </Box>
              <VStack align={'start'} gap={0}>
                <HStack justify={'space-between'}>
                  <Text color={'white'} fontSize={16} fontWeight={600}>
                    Ethereum
                  </Text>
                  <Text color={'white'} fontSize={16} fontWeight={600}>
                    6m 21s
                  </Text>
                </HStack>
                <Text color={'#9CA3AF'} fontSize={16} fontWeight={400}>
                  91.87K Transactions
                </Text>
              </VStack>
            </HStack>
          </Wrap>
        </VStack>
      </Container>
    </>
  );
};
