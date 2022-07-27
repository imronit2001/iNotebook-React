import React from "react";
import Notes from "./Notes";

const Home = () => {
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
      </div>
      <Notes />
    </React.Fragment>
  );
};

export default Home;
