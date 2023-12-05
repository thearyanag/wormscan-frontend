'use client';
import { Button, HStack, Td, Text, Tr, VStack } from '@/utils/chakra';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { CHAIN_ICON_MAP, CHAIN_ID } from '@/utils/chain';
interface IconsProps {
  tx_hash: string;
  id: string;
}

const Icons = ({ tx_hash, id }: IconsProps) => {
  return (
    <HStack>
      <Image
        src={CHAIN_ICON_MAP[id] || '/token/Ethereum ETH.svg'}
        width={30}
        height={30}
        alt="ethereum icon"
        priority
      />
      <VStack gap={0} align={'start'}>
        <Text
          color={'white'}
          textTransform={'capitalize'}
          fontWeight={600}
          fontSize={'sm'}
        >
          {CHAIN_ID[id] || 'unset'}
        </Text>
        <HStack>
          <Text fontSize={'sm'} color={'#7A4EF3'}>
            {tx_hash?.slice(0, 5)}...{tx_hash?.slice(-5)}
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

interface Props {
  tx_id: string;
  tx_hash: string;
  source_chain: string;
  source_address: string;
  destination_chain: string;
  destination_address: string;
  amount: number;
  origin_app: string;
  status: string;
  time: string;
  id: string;
}

export const TransactionRow = ({
  tx_id,
  tx_hash,
  source_chain,
  source_address,
  destination_chain,
  destination_address,
  amount,
  origin_app,
  status,
  time,
  id,
}: Props) => {
  const router = useRouter();
  return (
    <>
      <Tr
        _hover={{
          bg: '#ffffff1A',
          cursor: 'pointer',
        }}
        onClick={() => router.push(`/transactions/${tx_hash}`)}
      >
        <Td>
          <Text fontSize={'sm'} color={'#7A4EF3'}>
            {tx_id?.slice(0, 5)}...{tx_id?.slice(-5)}
          </Text>
        </Td>
        <Td py={1} textAlign={'start'}>
          <Icons id={source_chain} tx_hash={source_address} />
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
          <Icons id={destination_chain} tx_hash={destination_address} />
        </Td>
        <Td>
          <Text color={'white'} fontSize="sm" fontWeight={500}>
            {amount || '-----'}
          </Text>
        </Td>
        <Td>
          <Text color={'white'} fontSize="sm" fontWeight={500}>
            {origin_app}
          </Text>
        </Td>
        <Td>
          <VStack gap={0.5}>
            <Text color={'#10B981'} fontSize="sm" fontWeight={500}>
              {status.toLocaleUpperCase()}
            </Text>
            <HStack align={'center'} gap={1}>
              {/* <Image
                src={"/imgs/statusIcon.svg"}
                alt="status icon"
                width={15}
                height={15}
              /> */}

              {/* <Text color={"#AAAAAA"} fontSize="sm" fontWeight={500}>
                1m 1s
              </Text> */}
            </HStack>
          </VStack>
        </Td>
        <Td>
          <Text color={'white'} fontSize="sm" fontWeight={500}>
            {time
              ? (new Date().getTime() - new Date(time).getTime()) / 1000 > 60
                ? `${Math.floor(
                    (new Date().getTime() - new Date(time).getTime()) /
                      1000 /
                      60
                  )}m`
                : `${Math.floor(
                    (new Date().getTime() - new Date(time).getTime()) / 1000
                  )}s`
              : null}
          </Text>
        </Td>
      </Tr>
    </>
  );
};
