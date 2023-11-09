import { Box, Grid, GridItem, HStack, Text } from '@/utils/chakra';
import Image from 'next/image';
import React from 'react';
import { CHAIN_ICON_MAP , CHAIN_ID } from "@/utils/chain";

interface Asset {
  emitterChain: number;
  symbol: string;
  tokenChain: number;
  tokenAddress: string;
  volume: number;
}

interface ByAssetProps {
  topAssets: Asset[];
}

function formatNumberWithCommas(number : number) {
  let res =  number.toString().split(".")[0] + "." + (number.toString().split(".")[1]?.slice(0, 2) || "00");
  return res.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export const ByVolume: React.FC<ByAssetProps> = ({ topAssets })=> {
  return (
    <>
      <Box w="full" borderRadius={8} bg="rgba(255, 255, 255, 0.05)" p={6}>
        <HStack>
          <Text color={'white'} fontWeight={700} fontSize={20}>
            Top Assets by volume
          </Text>
        </HStack>
        {topAssets && topAssets.map((data, index) => (
        <Grid
          key={index}
          mt={4}
          templateColumns="repeat(4, 1fr)"
          color={'white'}
          fontSize={18}
        >
          <GridItem>
            <HStack>
              <Image
                src={CHAIN_ICON_MAP[data.emitterChain] || '/token/Ethereum ETH.svg'}
                width={30}
                height={30}
                alt="ethereum icon"
                priority
              />
              <Text>{CHAIN_ID[data.emitterChain].toUpperCase()}</Text>
            </HStack>
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box>
              {/* <svg
                width="50"
                height="16"
                viewBox="0 0 50 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M48.869 8.67573C49.2595 8.28521 49.2595 7.65204 48.869 7.26152L42.505 0.897556C42.1145 0.507032 41.4813 0.507032 41.0908 0.897557C40.7003 1.28808 40.7003 1.92125 41.0908 2.31177L46.7477 7.96862L41.0908 13.6255C40.7003 14.016 40.7003 14.6492 41.0908 15.0397C41.4813 15.4302 42.1145 15.4302 42.505 15.0397L48.869 8.67573ZM0.161865 8.96863L48.1619 8.96862L48.1619 6.96862L0.161865 6.96863L0.161865 8.96863Z"
                  fill="white"
                />
              </svg> */}
            </Box>
          </GridItem>
          <GridItem w={'full'}>
            <HStack>
              <Image
                src={'/token/Ethereum ETH.svg'}
                width={30}
                height={30}
                alt="ethereum icon"
                priority
              />
              <Text>{data.symbol}</Text>
            </HStack>
          </GridItem>
          {/* <GridItem></GridItem> */}
          <GridItem textAlign={'end'}>{formatNumberWithCommas(data.volume)}</GridItem>
        </Grid>
        ))}
      </Box>
    </>
  );
};
