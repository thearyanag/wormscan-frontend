'use client';
import { extendTheme } from '@chakra-ui/react';

export const styles = {
  global: () => ({
    '::-webkit-scrollbar': {
      display: 'none',
    },
    body: {
      bg: 'linear-gradient(180deg, #130047 0%, #000 100%)',
      width: '100%',
      minHeight: '100vh',
    },
  }),
};

const theme = extendTheme({
  styles,
});

export default theme;
