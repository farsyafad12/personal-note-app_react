import React, { useState } from "react";
import { getInitialData } from "../data";
import NotesList from "./NotesList";
import HeaderNote from "./HeaderNote";
import AddNote from "./AddNote";

function NoteSection() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredActiveNotes = notes
    .filter((note) => !note.archived)
    .filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const filteredArchivedNotes = notes
    .filter((note) => note.archived)
    .filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <AddNote onAddNote={handleAddNote} />
      <div className="section-note">
        <HeaderNote title="Catatan Aktif" searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <div className="container-note">
          <NotesList notes={filteredActiveNotes} onArchive={handleArchive} onDelete={handleDelete} />
        </div>
      </div>
      <div className="section-note">
        <h2>Arsip Catatan</h2>
        <div className="container-note">
          <NotesList notes={filteredArchivedNotes} onArchive={handleArchive} onDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default NoteSection;
