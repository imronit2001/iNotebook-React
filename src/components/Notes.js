import React, { useEffect } from "react";

import { AddNote } from "./AddNote";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <React.Fragment>
      <AddNote />
      <div className="row my-3">
        <h4 className="card-title">Your Notes</h4>
        {notes.map((note) => {
          return <Noteitem note={note} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Notes;
