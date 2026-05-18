// components/NoteItem/NoteItem.tsx

import Link from 'next/link';
import { Note } from '@/types/note';

type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
  return (
    <li>
      <Link href={`/notes/${item.id}`}>View details</Link>
    </li>
  );
};

export default NoteItem;
