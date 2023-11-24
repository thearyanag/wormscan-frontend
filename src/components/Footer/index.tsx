import { Box, Container, HStack, Text, VStack } from "@/utils/chakra";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CTALinks } from "./cta";

export const Footer = () => {
  return (
    <>
      <Box
        w={"full"}
        h={["24rem", "24rem", "16rem", "16rem"]}
        bg={"rgba(255, 255, 255, 0.05)"}
      >
        <Container
          maxW={{
            xl: "7xl",
            base: "5xl",
            md: "4xl",
            sm: "xl",
          }}
          display={"flex"}
          justifyContent={[
            "center",
            "center",
            "space-between",
            "space-between",
          ]}
          flexDirection={["column", "column", "row", "row", "row"]}
          gap={5}
          h={"full"}
          p={10}
        >
          <VStack
            h={{
              base: "full",
              sm: "auto",
            }}
            justify={["start", "start", "space-between", "space-between"]}
            align={"start"}
          >
            <VStack align={"start"}>
              <Link href={"/"}>
                <HStack>
                  <Image
                    width={25}
                    height={25}
                    src={"/imgs/logo.svg"}
                    alt={"Wormscan"}
                    priority
                  />
                  <Text fontSize={"xl"} color={"white"} fontWeight={500}>
                    Wormscan
                  </Text>
                </HStack>
              </Link>
              <Text color={"#6B7280"}>Your friendly cross-chain explorer</Text>
            </VStack>
            <Text color={"#4B5563"}>© 2023 | Wormscan</Text>
          </VStack>
          <HStack align={"start"}>
            <CTALinks />
          </HStack>
          <VStack
            h={{
              base: "full",
              sm: "auto",
            }}
            justify={["start", "start", "space-between", "space-between"]}
            align={"start"}
          >
            <HStack align={"start"} gap={5}>
              <Link href={"/discord"}>
                <Image
                  src={"/imgs/discord.svg"}
                  alt={"discord"}
                  width={25}
                  height={25}
                />
              </Link>
              <Link href={"https://twitter.com/WormscanHQ"}>
                <Image
                  src={"/imgs/twitter.svg"}
                  alt={"twitter"}
                  width={25}
                  height={25}
                />
              </Link>
            </HStack>
            <HStack>
              <Text color={"#9CA3AF"}>Built on</Text>
              <Image
                alt="wormhole"
                width={15}
                height={15}
                priority
                src={"/imgs/wormhole.svg"}
              />
              <Link href={"https://wormhole.com/"}>
                <Text color={"white"}>Wormhole</Text>
              </Link>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};
