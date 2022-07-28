import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  let location = useLocation();
  let navigate = useNavigate();
  React.useEffect(() => {}, [location]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    props.showAlert("Logout Successfully", "success");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <AutoStoriesIcon className="mx-2 pr-2" />
          i-Notebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link d-flex align-items-center  ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                <HomeIcon className="mx-2" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link d-flex align-items-center  ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                <InfoIcon className="mx-2" /> About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex justify-content-center">
              <Link to="/login" className="mx-1">
                <Button variant="contained">Login</Button>
              </Link>
              <Link to="/signup" className="mx-1">
                <Button variant="contained">Signup</Button>
              </Link>{" "}
            </form>
          ) : (
            <form className="d-flex justify-content-center align-center">
              <Button variant="text" className="mx-2 text-white">
                Hello,{" "}
                {localStorage.getItem("username")
                  ? localStorage.getItem("username")
                  : "User"}
              </Button>
              <Button onClick={handleLogout} variant="contained">
                Logout
              </Button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
