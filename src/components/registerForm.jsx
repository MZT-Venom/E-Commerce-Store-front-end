import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <img
                    src="/images/favicon.png"
                    alt="Logo"
                    width="70"
                    height="70"
                    style={{ marginBottom: "10px", marginTop: "-20px" }}
                  />
                  <h2
                    className="fw-bold mb-2 text-uppercase"
                    style={{
                      color: "#100F3D",
                      fontFamily: "bahnschrift",
                      fontWeight: "bold",
                    }}
                  >
                    Register
                  </h2>
                  <p
                    className="mb-5"
                    style={{ color: "#100F3D", fontFamily: "bahnschrift" }}
                  >
                    Register Yourself!
                  </p>

                  <div
                    className="form-outline form-white mb-4"
                    style={{ textAlign: "left", color: "#100F3D" }}
                  >
                    <label className="form-label" htmlFor="typeEmailX">
                      Email
                    </label>
                    <input
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div
                    className="form-outline form-white mb-4"
                    style={{ textAlign: "left", color: "#100F3D" }}
                  >
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div
                    className="form-outline form-white mb-4"
                    style={{ textAlign: "left", color: "#100F3D" }}
                  >
                    <label
                      className="form-label"
                      htmlFor="typeConfirmPasswordX"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="typeConfirmPasswordX"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <p
                    className="small mb-5 pb-lg-2"
                    style={{ color: "#100F3D" }}
                  >
                    Have an Account?{" "}
                    <Link
                      to="/login"
                      style={{ color: "#100F3D", textDecoration: "none" }}
                    >
                      Login
                    </Link>
                  </p>

                  <button
                    className="btn btn-lg px-5"
                    style={{
                      backgroundColor: "#0F0D3D",
                      color: "white",
                      fontFamily: "bahnschrift",
                      width: "100%",
                      marginTop: "-10px",
                    }}
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
