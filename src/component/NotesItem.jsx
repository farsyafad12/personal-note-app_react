import React from "react";
import { showFormattedDate } from "../data";

function NotesItem({ note, onArchive, onDelete }) {
  return (
    <div className="card-note">
      <div className="note-title">{note.title}</div>
      <div className="date-note">{showFormattedDate(note.createdAt)}</div>
      <div className="note-body">{note.body}</div>
      <div className="btn-action">
        <button className="archive" onClick={() => onArchive(note.id)}>
          {note.archived ? "Pindahkan" : "Arsipkan"}
        </button>
        <button className="delete" onClick={() => onDelete(note.id)}>
          Hapus
        </button>
      </div>
    </div>
  );
}

export default NotesItem;
