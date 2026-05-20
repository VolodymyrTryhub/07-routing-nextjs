import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';
import { fetchNoteById } from '@/lib/api';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const note = await fetchNoteById(id);

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}
