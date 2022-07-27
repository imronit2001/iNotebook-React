import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Ronit",
    class: "MCA",
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setState(
      {
        name: "Sumit",
        class: "BCA",
      },
      1000
    );
  };
  return (
    <NoteContext.Provider >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
