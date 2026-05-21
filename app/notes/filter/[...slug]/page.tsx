import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import NotesClient from './Notes.client';

import { getNotes } from '@/lib/api';

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function FilterPage({ params }: Props) {
  const { slug } = await params;

  const currentFilter = slug[0];

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', currentFilter],

    queryFn: () =>
      getNotes({
        page: 1,

        tag: currentFilter === 'all' ? undefined : currentFilter,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <h2>Filter: {currentFilter}</h2>

      <NotesClient tag={currentFilter} />
    </HydrationBoundary>
  );
}
