import React from "react";
import Notes from "./Notes";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <React.Fragment>
      <div className="mt-2">
        <div className="container mt-2">
          <h4 className="card-title">Add a Note</h4>
          <form className="my-3">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingTitle"
                placeholder="Title"
              />
              <label htmlFor="floatingTitle">Title</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="floatingDescription"
                placeholder="Description"
              ></textarea>
              <label htmlFor="floatingDescription">Description</label>
            </div>
            <Button variant="contained" endIcon={<SendIcon />}>
              Save
            </Button>
          </form>
        </div>
      </div>
      <Notes />
    </React.Fragment>
  );
};

export default Home;
