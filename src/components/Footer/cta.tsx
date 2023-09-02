import { Grid, GridItem, Wrap } from '@/utils/chakra';
import Link from 'next/link';
import React from 'react';

export const CTALinks = () => {
  return (
    <>
      <Grid
        gap={6}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
      >
        <GridItem color={'#BABACD'} fontWeight={500} fontSize={'md'}>
          <Link href={'/'}>Home</Link>
        </GridItem>
        <GridItem color={'#BABACD'} fontWeight={500} fontSize={'md'}>
          <Link href={'/contact-us'}>Contact Us</Link>
        </GridItem>
        <GridItem color={'#BABACD'} fontWeight={500} fontSize={'md'}>
          <Link href={'/transactions'}>Transactions</Link>
        </GridItem>
      </Grid>
    </>
  );
};
