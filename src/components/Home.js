import React from "react";
import Notes from "./Notes";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="mt-2">
        <Notes showAlert={props.showAlert} />
      </div>
    </React.Fragment>
  );
};

export default Home;
