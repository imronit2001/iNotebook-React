import React from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <React.Fragment>
      <div className="col-md-3">
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <div className="d-flex justify-content-between">
              <Button variant="contained">
                <EditIcon />
              </Button>
              <Button variant="contained" color="error">
                <DeleteIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Noteitem;
