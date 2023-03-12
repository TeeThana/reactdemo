import React from "react";
import logo from "../assets/images/pokeball.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={logo} alt="logo" width="4%" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div
            className="navbar-nav"
            style={{ fontSize: "1.2em", fontWeight: "900" }}
          >
            <a className="nav-link active" href="/">
              Home
            </a>
            <a className="nav-link active" href="/SignUp">
              Register
            </a>
            <a className="nav-link active" href="/SignIn">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
