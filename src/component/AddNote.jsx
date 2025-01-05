import React, { useState } from "react";

function AddNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    if (newTitle.length <= 50) {
      setTitle(newTitle);
    }
  };

  const handleBodyChange = (event) => {
    const newBody = event.target.value;
    if (newBody.length <= 500) {
      setBody(newBody);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && body) {
      onAddNote({
        id: Date.now(),
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      });
      setTitle("");
      setBody("");
    }
  };

  return (
    <div className="container-add-note">
      <h1>Simple Personal Note App</h1>
      <form onSubmit={handleSubmit}>
        <div className="header-add">
          <h4>Buat Catatan</h4>
          <span id="sisaKarakter">
            Judul: {50 - title.length} | Isi: {500 - body.length}
          </span>
        </div>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Tulis Judul Catatan (maks 50 karakter)"
          required
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          name="body"
          id="body"
          placeholder="Tulis Isi Catatan Kamu Disini (maks 500 karakter)"
          required
          value={body}
          onChange={handleBodyChange}
        ></textarea>
        <button type="submit">Buat Catatan</button>
      </form>
    </div>
  );
}

export default AddNote;
