import MovingLine from '@/components/misc/MovingLine';
import { RawDataTx } from '@/components/misc/RawDataTx';
import { Box, HStack, Text, VStack } from '@/utils/chakra';
import Image from 'next/image';
import React from 'react';

 const MovingCard = () => {
   return (
     <>
       <VStack mt={5}>
         <Text color={'#B5A7DE'} fontSize={16} fontWeight={500}>
           FROM
         </Text>
         <Box
           borderRadius={'full'}
           border={'5px solid'}
           borderColor={'#4B5563'}
         >
           <Image
             src={'/token/Ethereum ETH.svg'}
             width={70}
             height={70}
             alt="ethereum icon"
             priority
           />
         </Box>
         <Text color={'white'} fontSize={16} fontWeight={400}>
           Ethereum
         </Text>
         <Text color={'#7A4EF3'} fontSize={16} fontWeight={400}>
           0x2a5c.....433f2
         </Text>
       </VStack>
     </>
   );
 };
 const MovingCardWormHole = () => {
   return (
     <>
       <VStack>
         <Text color={'#B5A7DE'} fontSize={16} fontWeight={500}>
           Signed VAA
         </Text>
         <Box borderRadius={'full'}>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="92"
             height="92"
             viewBox="0 0 92 92"
             fill="none"
           >
             <path
               d="M45.9946 74.9585C38.3049 74.9536 30.9312 71.8985 25.4914 66.4636C20.0516 61.0286 16.9898 53.6577 16.978 45.968C16.9898 38.278 20.0514 30.9068 25.4911 25.4712C30.9309 20.0356 38.3046 16.9797 45.9946 16.9738C53.6845 16.9797 61.0582 20.0356 66.4979 25.4712C71.9376 30.9068 74.9993 38.278 75.011 45.968C74.9993 53.6577 71.9376 61.0286 66.4978 66.4636C61.0579 71.8985 53.6843 74.9536 45.9946 74.9585ZM45.9946 19.2058C38.8962 19.2107 32.0897 22.0312 27.0684 27.0484C22.047 32.0655 19.2209 38.8697 19.2101 45.968C19.217 53.0672 22.0419 59.8732 27.0643 64.8907C32.0866 69.9081 38.8954 72.7265 45.9946 72.7265C53.0938 72.7265 59.9026 69.9081 64.9249 64.8907C69.9472 59.8732 72.7721 53.0672 72.779 45.968C72.7682 38.8697 69.9421 32.0655 64.9207 27.0484C59.8994 22.0312 53.0929 19.2107 45.9946 19.2058Z"
               fill="white"
             />
             <path
               d="M49.6631 70.3716C43.2922 70.3666 37.1835 67.8349 32.6769 63.3318C28.1703 58.8287 25.6339 52.7219 25.624 46.3511C25.6339 39.9803 28.1703 33.8735 32.6769 29.3704C37.1835 24.8672 43.2922 22.3355 49.6631 22.3306C56.0339 22.3355 62.1426 24.8672 66.6492 29.3704C71.1558 33.8735 73.6923 39.9803 73.7021 46.3511C73.6923 52.7219 71.1558 58.8287 66.6492 63.3318C62.1426 67.8349 56.0339 70.3666 49.6631 70.3716ZM49.6631 24.0641C43.7524 24.0691 38.0849 26.4182 33.904 30.5963C29.723 34.7745 27.3702 40.4404 27.3613 46.3511C27.3711 52.2612 29.7246 57.9261 33.9054 62.1034C38.0862 66.2808 43.753 68.6293 49.6631 68.6343C55.5731 68.6293 61.24 66.2808 65.4208 62.1034C69.6016 57.9261 71.9551 52.2612 71.9649 46.3511C71.9551 40.441 69.6016 34.7761 65.4208 30.5987C61.24 26.4214 55.5731 24.0728 49.6631 24.0679V24.0641Z"
               fill="white"
             />
             <path
               d="M53.3302 65.7885C48.2785 65.7846 43.4347 63.777 39.8612 60.2064C36.2877 56.6356 34.2764 51.7933 34.2686 46.7417C34.2764 41.6901 36.2877 36.8478 39.8612 33.277C43.4347 29.7064 48.2785 27.6989 53.3302 27.695C58.3822 27.6979 63.2265 29.705 66.8002 33.276C70.3739 36.8469 72.3848 41.6897 72.3918 46.7417C72.3838 51.7933 70.3726 56.6356 66.7991 60.2064C63.2256 63.777 58.3819 65.7846 53.3302 65.7885ZM53.3302 28.9337C48.6067 28.9367 44.0773 30.8133 40.736 34.1519C37.3946 37.4905 35.5142 42.0183 35.5072 46.7417C35.5152 51.4645 37.3961 55.9914 40.7374 59.3291C44.0786 62.6669 48.6074 64.543 53.3302 64.5459C58.053 64.543 62.5817 62.6669 65.9231 59.3291C69.2643 55.9914 71.1452 51.4645 71.1531 46.7417C71.1463 42.0183 69.2657 37.4905 65.9243 34.1519C62.5829 30.8133 58.0536 28.9367 53.3302 28.9337Z"
               fill="white"
             />
             <path
               d="M56.9992 61.2014C53.2667 61.1985 49.6878 59.7153 47.0474 57.077C44.407 54.4387 42.921 50.8609 42.915 47.1284C42.92 43.3952 44.4057 39.8165 47.0461 37.1775C49.6866 34.5384 53.2661 33.0546 56.9992 33.0517C60.7324 33.0546 64.312 34.5384 66.9524 37.1775C69.5928 39.8165 71.0784 43.3952 71.0834 47.1284C71.0774 50.8609 69.5915 54.4387 66.9511 57.077C64.3108 59.7153 60.7317 61.1985 56.9992 61.2014ZM56.9992 33.7957C53.4634 33.7986 50.0731 35.204 47.5722 37.7035C45.0713 40.203 43.6641 43.5926 43.6591 47.1284C43.665 50.6636 45.0727 54.0521 47.5735 56.5508C50.0743 59.0495 53.464 60.4545 56.9992 60.4574C60.5344 60.4545 63.9241 59.0495 66.4249 56.5508C68.9257 54.0521 70.3335 50.6636 70.3393 47.1284C70.3344 43.5926 68.9273 40.203 66.4264 37.7035C63.9255 35.204 60.535 33.7986 56.9992 33.7957Z"
               fill="white"
             />
             <rect
               x="1"
               y="1"
               width="90"
               height="90"
               rx="45"
               stroke="#10DD99"
               stroke-width="2"
             />
           </svg>
         </Box>
         <HStack w={'10rem'} align={'center'} justify={'center'}>
           <Text color={'#10DD99'} fontSize={16} fontWeight={400}>
             13 confirmations
           </Text>
           <Box>
             <svg
               width="20"
               height="20"
               viewBox="0 0 20 20"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <rect width="20" height="20" rx="10" fill="#02AB73" />
               <path
                 d="M7.44949 13.0841L4.13065 9.76523L3.00049 10.8874L7.44949 15.3364L17.0001 5.7858L15.8779 4.6636L7.44949 13.0841Z"
                 fill="white"
               />
             </svg>
           </Box>
         </HStack>
       </VStack>
     </>
   );
 };

const TxPage = () => {
  return (
    <>
      <Box
        borderRadius={12}
        p={5}
        mt={4}
        w="full"
        bg="rgba(255, 255, 255, 0.05)"
        display={'flex'}
        flexDirection={'column'}
        gap={8}
      >
        <HStack gap={10}>
          <Text color={'#9CA3AF'} fontSize={16} fontWeight={500}>
            Signature
          </Text>
          <Text
            display={['none', 'none', 'block', 'block']}
            color={'#A281FF'}
            fontSize={16}
            fontWeight={500}
          >
            5J4nKPRjBL8Xv2fTeaFJFbkZLGaEWyrjMzuK26Cyw6Lne8mtJpwLVGRVAUxBV2RCFdPGXd2Ggy3drG1crYTU7K78
          </Text>
          <Text
            display={['block', 'block', 'none', 'none']}
            color={'#A281FF'}
            fontSize={16}
            fontWeight={500}
          >
            5J4nK....U7K78
          </Text>
        </HStack>
        <HStack gap={12}>
          <Text color={'#9CA3AF'} fontSize={16} fontWeight={500}>
            Amount
          </Text>
          <Text color={'white'} fontSize={16} fontWeight={500}>
            12.6 USDC
          </Text>
        </HStack>
        <Box
          w="full"
          maxW={'5xl'}
          bg="#0E042C"
          mx="auto"
          borderRadius={10}
          py={5}
          px={10}
          justifyContent={'space-between'}
          alignItems={'center'}
          display={'flex'}
        >
          <MovingCard />
          <MovingLine />
          <MovingCardWormHole />
          <MovingLine />
          <MovingCard />
        </Box>
        <HStack gap={12}>
          <Text color={'#9CA3AF'} fontSize={16} fontWeight={500}>
            Origin App
          </Text>
          <Text color={'white'} fontSize={16} fontWeight={500}>
            Portal Token Bridge
          </Text>
        </HStack>
        <HStack gap={12}>
          <Text color={'#9CA3AF'} fontSize={16} fontWeight={500}>
            Timestamp
          </Text>
          <Text color={'white'} fontSize={16} fontWeight={500}>
            a few seconds ago
          </Text>
        </HStack>
        <HStack gap={12}>
          <Text color={'#9CA3AF'} fontSize={16} fontWeight={500}>
            VAA ID
          </Text>
          <Text color={'#A281FF'} fontSize={16} fontWeight={500}>
            21/ccc....1856
          </Text>
        </HStack>
        <HStack gap={12}>
          <Text color={'#9CA3AF'} fontSize={16} fontWeight={500}>
            Contract Address
          </Text>
          <Text color={'#A281FF'} fontSize={16} fontWeight={500}>
            21/ccc....1856
          </Text>
        </HStack>
      </Box>
      <RawDataTx />
    </>
  );
};

export default TxPage;
