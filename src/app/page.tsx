import { AvgTime } from '@/components/Stats/AvgTime';
import { StatsCard } from '@/components/Stats/StatsCard';
import { HomeSearch } from '@/components/search/homeSearch';
import { VStack } from '@/utils/chakra';

export default function Home() {
  return (
    <>
      <VStack gap={7} mt={['1rem', '1rem', '3rem', '3rem']}>
        <HomeSearch />
        <StatsCard />
        <AvgTime />
      </VStack>
    </>
  );
}
