import React, { useEffect } from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);
  return (
    <React.Fragment>
      <div>
        My name is {a.state.name} and i am in {a.state.class}
      </div>
    </React.Fragment>
  );
};

export default About;
