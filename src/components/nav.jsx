import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#100F3D" }}
    >
      {/* Logo */}
      <div className="container-fluid">
        <img
          src="./images/cart.png"
          alt="Ecommece"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
        <a
          className="navbar-brand"
          href="#"
          style={{
            color: "white",
            fontWeight: "bold",
            fontFamily: "bahnschrift",
          }}
        >
          E-Commerce Store
        </a>
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
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={{ color: "white", fontFamily: "bahnschrift" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-link"
                style={{ color: "white", fontFamily: "bahnschrift" }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-link"
                style={{ color: "white", fontFamily: "bahnschrift" }}
              >
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactus"
                className="nav-link"
                style={{ color: "white", fontFamily: "bahnschrift" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <Link className="nav-link" to="/register">
            <button
              className="btn btn-outline-light"
              style={{
                fontFamily: "bahnschrift",
                marginRight: "10px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Register
            </button>
          </Link>
          <Link to="/login">
      <button
        className="btn btn-outline-light"
        style={{
          fontFamily: "bahnschrift",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        Login
      </button>
    </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
