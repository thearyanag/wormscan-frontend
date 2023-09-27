import { Box } from '@/utils/chakra';
import React from 'react';
import { ByTransaction } from './ByTransaction';
import { ByVolume } from './ByVolume';

export const TopByPath = () => {
  return (
    <>
      <Box display={'flex'} w="full" gap={12} maxW={'7xl'} mx="auto">
        <ByTransaction />
        <ByVolume />
      </Box>
    </>
  );
};
