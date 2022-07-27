import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
// import { Alert } from "./components/Alert";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";

const App = () => {
  return (
    <React.Fragment>
      <NoteState>
        <Navbar />
        {/*<Alert message="This ia amazing React Course" />*/}
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </NoteState>
    </React.Fragment>
  );
};

export default App;
