'use client';

import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useQuery } from '@tanstack/react-query';

import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';
import Modal from '@/components/Modal/Modal';
import NoteForm from '@/components/NoteForm/NoteForm';
import NoteList from '@/components/NoteList/NoteList';

import { getNotes } from '@/lib/api';

interface Props {
  tag: string;
}

export default function NotesClient({ tag }: Props) {
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateSearch = useDebouncedCallback(
    (value: string) => {
      setSearch(value);

      setPage(1);
    },

    300
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ['notes', page, search, tag],

    queryFn: () =>
      getNotes({
        page,
        search,

        tag: tag === 'all' ? undefined : tag,
      }),

    placeholderData: previous => previous,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <button type="button" onClick={() => setIsModalOpen(true)}>
        Create note +
      </button>

      <SearchBox onChange={value => updateSearch(value)} />

      <NoteList notes={data.notes} />

      <Pagination pageCount={data.totalPages} currentPage={page} onPageChange={setPage} />

      {isModalOpen && (
        <Modal>
          <NoteForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}
