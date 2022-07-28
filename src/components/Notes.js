import React, { useEffect, useRef, useState } from "react";

import { AddNote } from "./AddNote";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);

  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <AddNote />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="efloatingTitle"
                    placeholder="Title"
                    name="etitle"
                    onChange={onChange}
                    value={note.etitle}
                  />
                  <label htmlFor="efloatingTitle">Title</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="efloatingDescription"
                    placeholder="Description"
                    name="edescription"
                    onChange={onChange}
                    value={note.edescription}
                  ></textarea>
                  <label htmlFor="efloatingDescription">Description</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="efloatingTitle"
                    placeholder="Title"
                    name="etitle"
                    onChange={onChange}
                    value={note.etag}
                  />
                  <label htmlFor="efloatingTitle">Title</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h4 className="card-title">Your Notes</h4>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Notes;
