import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AddNote } from "./AddNote";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

const Notes = (props) => {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Updated Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <AddNote showAlert={props.showAlert} />

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
                    id="efloatingTag"
                    placeholder="Tag"
                    name="etag"
                    onChange={onChange}
                    value={note.etag}
                  />
                  <label htmlFor="efloatingTag">Tag</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  note.etitle.length < 3 || note.edescription.length < 5
                }
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
        <div className="container">
          <p className="text-center my-4 text-muted">
            {notes.length === 0 && "No Notes to Display"}
          </p>
        </div>
        {notes.length > 0 &&
          notes.map((note) => {
            return (
              <Noteitem
                key={note._id}
                updateNote={updateNote}
                showAlert={props.showAlert}
                note={note}
              />
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default Notes;
