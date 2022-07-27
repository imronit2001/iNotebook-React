import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "62e0eb1bc18114065c383b36",
      user: "62deab67e9fc9f668b9b588f",
      title: "My Title 2",
      description: "Access the video",
      tag: "youtube",
      date: "2022-07-27T07:36:59.832Z",
      __v: 0,
    },
    {
      _id: "62e13b6cb2c0300a0ba3f723",
      user: "62deab67e9fc9f668b9b588f",
      title: "My Title 3",
      description: "Access the video and subcribe",
      tag: "youtube",
      date: "2022-07-27T13:19:40.359Z",
      __v: 0,
    },
    {
      _id: "62e13b78b2c0300a0ba3f725",
      user: "62deab67e9fc9f668b9b588f",
      title: "My Title 4",
      description: "Enjoy",
      tag: "youtube",
      date: "2022-07-27T13:19:52.564Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
