import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onArchive, onDelete }) {
  return (
    <>
      {notes.length > 0 ? (
        notes.map((note) => (
          <NotesItem
            key={note.id}
            note={note}
            onArchive={onArchive}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>Tidak Ada Catatan</p>
      )}
    </>
  );
}

export default NotesList;
