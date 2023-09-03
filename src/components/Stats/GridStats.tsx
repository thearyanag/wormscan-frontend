import { HStack, Text, VStack } from '@/utils/chakra';
import Image from 'next/image';
import React from 'react';

interface Props {
  label: string;
  value: string;
  percentage: string;
  isPositive: boolean;
}
export const GridStats = ({ isPositive, label, percentage, value }: Props) => {
  const color = isPositive ? '#10B981' : '#F43F5E';
  return (
    <>
      <VStack align={'start'} gap={1}>
        <Text fontWeight={500} fontSize={'md'} color={'#B5A7DE'}>
          {label}
        </Text>
        <HStack align={'end'} gap={1}>
          <Text
            lineHeight={'24px'}
            textAlign={'end'}
            color={'white'}
            fontWeight={600}
            fontSize={'2xl'}
          >
            {value}
          </Text>
          <Text color={color}>
            {isPositive ? (
              <Image
                src="/imgs/greenArrow.svg"
                alt="green arrow"
                width={18}
                height={18}
              />
            ) : (
              <Image
                src="/imgs/redArrow.svg"
                alt="red arrow"
                width={18}
                height={18}
              />
            )}
          </Text>
          <Text color={color}>{percentage}</Text>
        </HStack>
      </VStack>
    </>
  );
};
