// Footer.js
import React from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="page-footer font-small"
      style={{ backgroundColor: "#0F0D3D", color: "white" }}
    >
      {/* Footer Links */}
      <div className="container-fluid text-center text-md-left">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="col-md-6 mt-md-0 mt-3">
            {/* Content */}
            <h5
              className="text-uppercase"
              style={{ marginTop: "40px", fontFamily: "bahnschrift" }}
            >
              E-Commerce Store
            </h5>
            <p style={{ fontFamily: "bahnschrift" }}>
              At Our Ecommerce Store, we are passionate about providing
              exceptional products and an unparalleled shopping experience. We
              strive to offer a curated selection of high-quality items that
              meet the diverse needs and tastes of our valued customers.
            </p>
          </div>
          {/* Grid column */}

          <hr className="clearfix w-100 d-md-none pb-3" />

          {/* Grid column */}
          <div className="col-md-3 mb-md-0 mb-3">
            {/* Links */}
            <h5
              className="text-uppercase"
              style={{ marginTop: "40px", fontFamily: "bahnschrift" }}
            >
              Links
            </h5>

            <ul className="list-unstyled">
              <li>
                <a
                  href="index.html"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="cart.html"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="contactus.html"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-3 mb-md-0 mb-3">
            {/* Links */}
            <h5 className="text-uppercase" style={{ marginTop: "40px" }}>
              Links
            </h5>

            <ul className="list-unstyled">
              <li>
                <a
                  href="#!"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
      {/* Footer Links */}

      {/* Copyright */}
      <div className="footer-copyright text-center py-3">
        © 2023 Copyright:
        <a href="/" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          ecommerce-store.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
