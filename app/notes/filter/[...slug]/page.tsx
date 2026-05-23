import NotesClient from './Notes.client';

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function FilterPage({ params }: Props) {
  const { slug } = await params;

  const currentFilter = slug[0];

  return <NotesClient key={currentFilter} tag={currentFilter} />;
}
