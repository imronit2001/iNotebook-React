import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import { useContext } from "react";

import NoteContext from "../context/notes/NoteContext";
export const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-2">
      <h4 className="card-title">Add a Note</h4>
      <form className="my-3">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingTitle"
            placeholder="Title"
            name="title"
            onChange={onChange}
          />
          <label htmlFor="floatingTitle">Title</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="floatingDescription"
            placeholder="Description"
            name="description"
            onChange={onChange}
          ></textarea>
          <label htmlFor="floatingDescription">Description</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingTitle"
            placeholder="Title"
            name="title"
            onChange={onChange}
          />
          <label htmlFor="floatingTitle">Title</label>
        </div>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleClick}
        >
          Save
        </Button>
      </form>
    </div>
  );
};
