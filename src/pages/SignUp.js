import React from "react";
//import { useNavigate } from "react-router-dom";
//import { Container } from "react-bootstrap";

function SignUp(props) {
  //const navigate = useNavigate();
  console.log("props", props);
  return (
    <div>
      <h3
        style={{
          fontSize: "3em",
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Sign Up
      </h3>
      <div className="form_SignUp">
        <p>Username</p>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="demo@gmail.com"
          value={props.email}
          autoFocus
          required
          onChange={(e) => props.handleEmail(e)}
        ></input>
        <p>Password</p>
        <input
          className="form-control mb-3"
          type="password"
          placeholder="password"
          value={props.password}
          autoFocus
          required
          onChange={(p) => props.handlePassword(p)}
        ></input>
      </div>

      <div className="submit">
        <button
          className="btn btn-primary mt-4 w-100"
          onClick={() => props.handleSignup()}
        >
          Sign Up
        </button>
        <div className="d-flex align-items-center justify-content-center">
          <p className="text-center mt-3 mr-1">Have an account?</p>
          <button
            className="btn btn-link px-0"
            onClick={() => props.setHasAccount(!props.hasAccount)}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
