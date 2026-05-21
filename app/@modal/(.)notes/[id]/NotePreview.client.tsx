'use client';

import type { Note } from '@/types/note';

interface Props {
  note: Note;
}

export default function NotePreview({ note }: Props) {
  return (
    <div>
      <h2>{note.title}</h2>

      <p>Category: {note.category.name}</p>

      <p>{note.content}</p>
    </div>
  );
}
