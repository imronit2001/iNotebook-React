import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import { useContext } from "react";

import NoteContext from "../context/notes/NoteContext";
export const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (note.tag === "") {
      note.tag = "default";
    }
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
    props.showAlert("Notes Added Successfully", "success");
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
            value={note.title}
            required
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
            value={note.description}
            required
          ></textarea>
          <label htmlFor="floatingDescription">Description</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingTag"
            placeholder="Tag"
            name="tag"
            onChange={onChange}
            value={note.tag}
          />
          <label htmlFor="floatingTag">Tag</label>
        </div>
        <Button
          disabled={note.title.length < 3 || note.description.length < 5}
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
