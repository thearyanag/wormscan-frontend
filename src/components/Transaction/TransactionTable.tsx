import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@/utils/chakra';
import React from 'react';
import { TransactionRow } from './TransactionRow';

export const TransactionTable = () => {
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
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
