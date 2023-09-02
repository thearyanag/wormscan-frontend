'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Text } from '@/utils/chakra';

export const CTALinks = () => {
  const pathname = usePathname();
  return (
    <>
      <Link href={'/'}>
        <Text color={pathname === '/' ? 'white' : '#BABACD'}>Home</Text>
      </Link>
      <Link href={'/transactions'}>
        <Text color={pathname === '/transactions' ? 'white' : '#BABACD'}>
          Transactions
        </Text>
      </Link>
    </>
  );
};
