'use client';
import {
  Box,
  Button,
  Center,
  HStack,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@/utils/chakra';
import React from 'react';
import { TransactionRow } from './TransactionRow';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface Data {
  txId: string;
  txHash: string;
  source_chain: string;
  source_address: string;
  destination_chain: string;
  destination_address: string;
  amount: number;
  standardizedProperties: {
    fromChain: string;
    toChain: string;
    toAddress: string;
    appIds: string[];
  };
  usdAmount: number;
  globalTx: {
    originTx: {
      status: string;
    };
  };
  emitterNativeAddress: string;
  emitterChain: string;
  origin_app: string;
  timestamp: string;
  id: string;
}

export const TransactionTable = () => {
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  // let [data, setData] = useState(null);

  let [data, setData] = useState<Data[]>([]);
  const searchParams = useSearchParams();
  let [loading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${BACKEND_URL}/tx?page=${searchParams.get('page') || 1}`
        );
        const json = await response.json();
        setData(json['transactions']);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams.get('page')]);
  if (loading) {
    return (
      <>
        <Center>
          <Spinner color="white" />
        </Center>
      </>
    );
  }
  return (
    <>
      <TableContainer my={10} borderTopRadius={'8px'}>
        <Table variant="unstyled">
          <Thead borderBottom={'0px'} bg={'rgba(255, 255, 255, 0.10)'}>
            <Tr>
              <Th color={'#B5A7DE'} fontWeight={500} fontSize={'sm'}>
                TX HASH
              </Th>
              <Th color={'#B5A7DE'} fontWeight={500} fontSize={'sm'}>
                FROM
              </Th>
              <Th color={'#B5A7DE'} fontWeight={500} fontSize={'sm'}></Th>
              <Th color={'#B5A7DE'} fontWeight={500} fontSize={'sm'}>
                TO
              </Th>
              <Th color={'#B5A7DE'} fontWeight={500} fontSize={'sm'}>
                AMOUNT (USDC)
              </Th>
              <Th color={'#B5A7DE'} fontWeight={500} fontSize={'sm'}>
                ORIGIN APP
              </Th>
              <Th color={'#B5A7DE'} fontWeight={500} fontSize={'sm'}>
                STATUS
              </Th>
              <Th color={'#B5A7DE'} fontWeight={500} fontSize={'sm'}>
                TIME
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {!(data.length === 0)
              ? data.map((row) => (
                  <TransactionRow
                    tx_id={row['id']}
                    id={row['id']}
                    key={row['txHash']}
                    tx_hash={row['txHash']}
                    source_chain={row['emitterChain']}
                    source_address={row['emitterNativeAddress']}
                    destination_chain={
                      row['standardizedProperties']
                        ? row['standardizedProperties']['toChain']
                        : ''
                    }
                    destination_address={
                      row['standardizedProperties']
                        ? row['standardizedProperties']['toAddress']
                        : ''
                    }
                    amount={row['usdAmount']}
                    origin_app={
                      row['standardizedProperties']
                        ? row['standardizedProperties']['appIds']
                          ? row['standardizedProperties']['appIds'][0]
                          : ''
                        : ''
                    }
                    status={row.globalTx?.originTx?.status || 'pending'}
                    time={row['timestamp']}
                  />
                ))
              : ''}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack justify={'end'} mb={10} gap={3}>
        <Button
          variant={'outline'}
          _hover={{
            bg: '#ffffff40',
          }}
          textColor={'white'}
          w={32}
          onClick={() => {
            const page = searchParams.get('page');
            if (!page || page === '1') {
              return;
            }
            router.push(`/transactions?page=${parseInt(page) - 1}`);
          }}
        >
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width={20}
              height={20}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <p>Perv</p>
          </Box>
        </Button>
        <Button
          _hover={{
            bg: '#ffffff40',
          }}
          variant={'outline'}
          textColor={'white'}
          w={32}
          onClick={() => {
            const page = searchParams.get('page');
            if (!page) {
              router.push(`/transactions?page=1`);
              return;
            }
            router.push(`/transactions?page=${parseInt(page) + 1}`);
          }}
        >
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <p>Next</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              width={20}
              height={20}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Box>
        </Button>
      </HStack>
    </>
  );
};
