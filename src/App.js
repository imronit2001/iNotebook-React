import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
// import { Alert } from "./components/Alert";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
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
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </NoteState>
    </React.Fragment>
  );
};

export default App;
