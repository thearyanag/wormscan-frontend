"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@/utils/chakra";
import React, { useEffect, useState } from "react";

import { GridStats } from "./GridStats";

interface Data {
  total_tx_count: number
  "24h_tx_count": number
  "24h_volume": number 
  "24h_messages": number 
  total_volume: number;
  tvl: number
}

export const StatsCard = () => {
  const BACKEND_URL = "https://wormscan.up.railway.app";

  // let [data, setData] = useState(null);

  let [data, setData] = useState<Data>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BACKEND_URL}/stats`);
      const json = await response.json();
      setData(json);
    };

    console.log("data");

    fetchData();
  }, []);

  return (
    <>
      <Container
        bg={"rgba(255, 255, 255, 0.10)"}
        boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
        borderRadius={"10px"}
        w={"full"}
        maxW={["full", "full", "2xl", "7xl"]}
        py={[5, 5, 7, 7]}
        h={"full"}
        px={[3, 3, 10, 10]}
        gap={4}
        display={"flex"}
        flexDirection={"column"}
      >
        <Text
          color={"white"}
          fontWeight={600}
          fontSize={["lg", "lg", "2xl", "2xl"]}
        >
          Wormhole Stats
        </Text>
        <HStack
          color={"white"}
          w="full"
          align={["center", "center", "start", "start"]}
          flexDirection={["column", "column", "row", "row"]}
          justifyContent={"start"}
          h={"full"}
          gap={20}
        >
          <VStack
            p={3}
            w={["18rem", "18rem", "24rem", "24rem"]}
            borderRadius={"4px"}
            border={"1px solid #675E80"}
            minH={"full"}
          >
            <Box
              borderRadius={"4px"}
              px={4}
              w="full"
              py={3}
              bg={"rgba(255, 255, 255, 0.06)"}
            >
              <VStack align={"start"} gap={1}>
                <Text fontWeight={500} fontSize={"md"} color={"#B5A7DE"}>
                  Total Transactions
                </Text>
                <Text
                  lineHeight={"24px"}
                  textAlign={"end"}
                  color={"white"}
                  fontWeight={600}
                  fontSize={"2xl"}
                >
                  {data ? data.total_tx_count : "Loading..."}
                </Text>
              </VStack>
            </Box>
            <Box
              borderRadius={"4px"}
              px={4}
              w="full"
              py={3}
              bg={"rgba(255, 255, 255, 0.06)"}
            >
              <VStack align={"start"} gap={1}>
                <Text fontWeight={500} fontSize={"md"} color={"#B5A7DE"}>
                  TVL
                </Text>
                <Text
                  lineHeight={"24px"}
                  textAlign={"end"}
                  color={"white"}
                  fontWeight={600}
                  fontSize={"2xl"}
                >
                  {data ? data.tvl : "Loading..."}
                </Text>
              </VStack>
            </Box>
          </VStack>
          <Grid
            w="full"
            templateRows={[
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]}
            columnGap={[5, 5, 24, 24]}
            rowGap={[8, 8, 20, 20]}
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
            ]}
          >
            <GridItem>
              <GridStats
                isPositive={true}
                label={"24hrs TX"}
                percentage={"+5.0%"}
                value={data ? data["24h_tx_count"] :0 }
              />
            </GridItem>
            <GridItem>
              <GridStats
                isPositive={true}
                label={"Transaction Volume"}
                percentage={"+5%"}
                value={data ? data["total_volume"] : 0}
              />
            </GridItem>
            <GridItem>
              <GridStats
                isPositive={true}
                label={"24hrs Message Passed"}
                percentage={"+5%"}
                value={data ? data["24h_messages"] : 0}
              />
            </GridItem>
            <GridItem>
              <GridStats
                isPositive={false}
                label={"24hrs Volumes"}
                percentage={"-5.0%"}
                value={data ? data["24h_volume"] : 0}
              />
            </GridItem>
            <GridItem>
              <GridStats
                isPositive={true}
                label={"Asset Transferred"}
                percentage={"+5.0%"}
                value={data ? data["total_volume"] : 0}
              />
            </GridItem>
            <GridItem
              h={"full"}
              w="full"
              display={"flex"}
              justifyContent={"end"}
              alignItems={"end"}
              gap={2}
            >
              <Button color={"white"} variant={"outline"}>
                1D
              </Button>
              <Button variant={"outline"} color={"white"}>
                1W
              </Button>
              <Button variant={"outline"} color={"white"}>
                1M
              </Button>
            </GridItem>
          </Grid>
        </HStack>
      </Container>
    </>
  );
};
