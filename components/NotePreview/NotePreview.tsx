import type { Note } from '@/types/note';

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
  return (
    <div>
      <h2>{note.title}</h2>

      <p>Category: {note.category.name}</p>

      <p>{note.content}</p>
    </div>
  );
}
