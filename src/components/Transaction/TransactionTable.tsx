'use client';
import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@/utils/chakra';
import React from 'react';
import { TransactionRow } from './TransactionRow';
import { useEffect, useState } from 'react';

interface Data {
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
  origin_app: string;
  status: string;
  timestamp: string;
}

export const TransactionTable = () => {

  const BACKEND_URL = "https://wormscan.up.railway.app";

  // let [data, setData] = useState(null);

  let [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BACKEND_URL}/tx`);
      const json = await response.json();
      setData(json["transactions"]);
    };

    fetchData();
  }, []);


  return (
    <>
      <TableContainer mt={10} borderTopRadius={'8px'}>
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
                AMOUNT
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
            {!(data.length === 0) ? data.map((row) => (
              <TransactionRow key={row["txHash"]} tx_hash={row["txHash"]} source_chain={row["standardizedProperties"]? row["standardizedProperties"]["fromChain"] : ""} source_address={row["source_address"]} destination_chain={row["standardizedProperties"]? row["standardizedProperties"]["toChain"] : ""} destination_address={row["standardizedProperties"] ? row["standardizedProperties"]["toAddress"]  : ""} amount={row["usdAmount"]} origin_app={row["standardizedProperties"] ? row["standardizedProperties"]["appIds"] ? row["standardizedProperties"]["appIds"][0] : "" : ""} status={row["globalTx"]["originTx"]["status"]} time={row["timestamp"]}/>
            )) : ""}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
