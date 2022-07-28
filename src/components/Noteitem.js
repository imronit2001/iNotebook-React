import React, { useContext } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import NoteContext from "../context/notes/NoteContext";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <React.Fragment>
      <div className="col-md-3">
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">
              {note.title} ({note.tag})
            </h5>
            <p className="card-text">{note.description}</p>
            <div className="d-flex justify-content-between">
              <Button variant="contained">
                <EditIcon
                  onClick={() => {
                    updateNote(note);
                  }}
                />
              </Button>
              <Button variant="contained" color="error">
                <DeleteIcon
                  onClick={() => {
                    deleteNote(note._id);
                    props.showAlert("Deleted Successfully", "success");
                  }}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Noteitem;
