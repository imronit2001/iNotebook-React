import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const Home = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <React.Fragment>
      <div>
        <div className="container">
          <h1>Add a Note</h1>
          <form className="my-3">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
          </form>
        </div>
        <div className="container my-3">
          <h1>Your Notes</h1>
          {notes.map((note) => {
            return note.title;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
