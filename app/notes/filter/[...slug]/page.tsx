import { getNotes } from '@/lib/api';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function FilterPage({ params }: Props) {
  const { slug } = await params;

  const currentFilter = slug[0];

  const data = await getNotes({
    page: 1,
  });

  const filteredNotes =
    currentFilter === 'all'
      ? data.notes
      : data.notes.filter(note => note.category.name === currentFilter);

  return (
    <>
      <h2>Filter: {currentFilter}</h2>

      <NotesClient notes={filteredNotes} />
    </>
  );
}
