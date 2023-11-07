'use client';
import { Box } from "@/utils/chakra";
import React from "react";
import { ByTransaction } from "./ByTransaction";
import { ByVolume } from "./ByVolume";
import { useState } from "react";

interface Asset {
  emitterChain: number;
  symbol: string;
  tokenChain: number;
  tokenAddress: string;
  volume: string;
}

interface ChainPair {
  emitterChain: number;
  destinationChain: number;
  numberOfTransfers: string;
}

interface TopByPathData {
  topAssets: Asset[];
  topPairs: ChainPair[];
}

export const TopByPath = () => {
  // const [data, setData] = React.useState<any>([]);
  const [data, setData] = useState<TopByPathData>({
    topAssets: [],
    topPairs: [],
  });
  const BACKEND_URL = "https://wormscan.up.railway.app";

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        BACKEND_URL + "/stats/top?timeframe=30d&limit=10"
      );
      const json = await response.json();
      setData({
        topAssets: json.topAssets.assets,
        topPairs: json.topPairs.chainPairs,
      });
    };
    fetchData();
  }, []);

  console.log(data.topPairs[0])

  return (
    <>
      <Box display={"flex"} w="full" gap={12} maxW={"7xl"} mx="auto">
         {data.topPairs && Array.isArray(data.topPairs) ? (
          <ByTransaction topPaths={data.topPairs} />
         ) : null}
        {/* <ByVolume />
         */}
         {data.topAssets && Array.isArray(data.topAssets) ? (
          <ByVolume topAssets={data.topAssets} />
          ) : null}
      </Box>
    </>
  );
};
