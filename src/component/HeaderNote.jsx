import React from "react";

function HeaderNote({ title, searchTerm, onSearchChange }) {
  return (
    <div className="header-note">
      <h2>{title}</h2>
      <div className="container-search">
        <input
          type="text"
          placeholder="Cari Catatan"
          name="text"
          className="search-note-active"
          value={searchTerm}
          onChange={onSearchChange}
        />
        <i className="bi bi-search"></i>
      </div>
    </div>
  );
}

export default HeaderNote;
