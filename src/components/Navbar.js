import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const Navbar = () => {
  let location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
          <form class="d-flex justify-content-center">
            <p className="text-white m-auto px-2">
              <i>Created by : </i>
              <span className="blockquote">Ronit Singh</span>
            </p>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
