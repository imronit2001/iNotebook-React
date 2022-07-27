import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <React.Fragment>
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
