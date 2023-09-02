import { Container, HStack, Heading } from '@/utils/chakra';
import Image from 'next/image';
import { CTALinks } from './cta';
import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <Container
        display={'flex'}
        mt={3}
        h={'16'}
        maxW={{
          xl: '7xl',
          base: '5xl',
          md: '4xl',
          sm: 'xl',
        }}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Link href={'/'}>
          <HStack h={'full'}>
            <Image
              height={40}
              src={'/imgs/logo.svg'}
              alt={'Wormscan'}
              width={40}
              priority
            />
            <Heading color={'white'} fontSize={'2xl'}>
              WormScan
            </Heading>
          </HStack>
        </Link>
        <HStack gap={5} color={'white'} fontSize={'md'} fontWeight={500}>
          <CTALinks />
        </HStack>
      </Container>
    </>
  );
};
