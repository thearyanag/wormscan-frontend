"use client";
import { Button, HStack, Td, Text, Tr, VStack } from "@/utils/chakra";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface IconsProps {
  chain: string;
  tx_hash: string;
}

const Icons = ({ chain, tx_hash }: IconsProps) => {
  return (
    <HStack>
      <Image
        src={"/token/Ethereum ETH.svg"}
        width={30}
        height={30}
        alt="ethereum icon"
        priority
      />
      <VStack gap={0} align={"start"}>
        <Text color={"white"} fontSize={"sm"}>
          {chain}
        </Text>
        <HStack>
          <Text fontSize={"sm"} color={"#7A4EF3"}>
            {tx_hash.slice(0, 5)}...{tx_hash.slice(-5)}
          </Text>
          <Button
            display={"flex"}
            justifyContent={"center"}
            size={"xs"}
            variant={"unstyled"}
          >
            <Image
              src={"/imgs/copyIcon.svg"}
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
}

export const TransactionRow = ({
  tx_hash,
  source_address,
  tx_id,
  destination_address,
  amount,
  origin_app,
  status,
  time,
}: Props) => {
  const router = useRouter();
  console.log(tx_id)
  return (
    <>
      <Tr
        _hover={{
          bg: "#ffffff1A",
          cursor: "pointer",
        }}
        onClick={() => router.push(`/transactions/${tx_hash}`)}
      >
        <Td>
          <Text fontSize={"sm"} color={"#7A4EF3"}>
            {tx_id?.slice(0, 5)}...{tx_id?.slice(-5)}
          </Text>
        </Td>
        <Td py={1} textAlign={"start"}>
          <Icons chain={source_address} tx_hash={tx_hash} />
        </Td>
        <Td>
          <Image
            src={"/imgs/arrowTable.svg"}
            alt="arrow table"
            width={100}
            height={10}
          />
        </Td>
        <Td py={1} textAlign={"start"}>
          <Icons chain={`${destination_address.slice(0,10)}...${destination_address.slice(-10)}...`} tx_hash={tx_hash} />
        </Td>
        <Td>
          <Text color={"white"} fontSize="sm" fontWeight={500}>
            {amount}
          </Text>
        </Td>
        <Td>
          <Text color={"white"} fontSize="sm" fontWeight={500}>
            {origin_app}
          </Text>
        </Td>
        <Td>
          <VStack gap={0}>
            <Text color={"#10B981"} fontSize="sm" fontWeight={500}>
              {status.toLocaleUpperCase()}
            </Text>
            <HStack align={"center"} gap={1}>
              <Image
                src={"/imgs/statusIcon.svg"}
                alt="status icon"
                width={15}
                height={15}
              />
              <Text color={"#AAAAAA"} fontSize="sm" fontWeight={500}>
                1m 1s
              </Text>
            </HStack>
          </VStack>
        </Td>
        <Td>
          <Text color={"white"} fontSize="sm" fontWeight={500}>
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
