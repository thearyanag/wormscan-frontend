'use client';
import { Box, Button, Text, VStack } from '@/utils/chakra';
import React, { useState } from 'react';

interface Props {
  data: any;
}
export const RawDataTx = ({ data }: Props) => {
  const [rawIsOpen, setRawIsOpen] = useState<boolean>(false);

  return (
    <>
      <VStack mt={4} w="full" bg="rgba(255, 255, 255, 0.05)">
        <Box
          borderRadius={12}
          p={5}
          w={'full'}
          display={'flex'}
          gap={8}
          justifyContent={'space-between'}
          alignItems={'center'}
          color={'white'}
        >
          <Text>Raw Data</Text>
          <Button
            color={'#B5A7DE'}
            fontWeight={400}
            fontSize={14}
            bg={'#111127'}
            borderColor={'#373A51'}
            border={'1px solid'}
            w={'fit-content'}
            onClick={() => {
              setRawIsOpen(!rawIsOpen);
            }}
            _hover={{
              bg: '#111127',
            }}
            rightIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.0596 6.23675L11.2929 6.47003L8 9.76292L4.70711 6.47003L4.94039 6.23675L7.64683 8.9373L8 9.2897L8.35317 8.9373L11.0596 6.23675Z"
                  fill="#101010"
                  stroke="#B5A7DE"
                />
              </svg>
            }
          >
            {rawIsOpen ? 'Less details' : 'More details'}
          </Button>
        </Box>
        {rawIsOpen && (
          <>
            <Box p={3} maxW={'100vw'} bg="#0F172A" overflow={'scroll'} w="full">
              <Box p={1} color="#5EEAD4" w={'full'}>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </Box>
            </Box>
          </>
        )}
      </VStack>
    </>
  );
};
