import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
export default function Signup(props) {
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");
  const [repass, setrepass] = useState("");

  const arr = { name: name, mail: mail, pass: pass };
  const enterUser = (event) => {
    event.preventDefault();
    if (pass === repass ) {
      props.setuserArr([...props.userArr, arr]);
     
    }
  };

  return (
    <>
      
        <div>
          <form className="containerForm">
            <h1 style={{ textDecoration: "underline", marginBottom: "5%" }}>
              Create Account
            </h1>
            <label for="username">
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="userName"
              required
              onChange={(event) => setname(event.target.value)}
            />

            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              onChange={(event) => setmail(event.target.value)}
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={(event) => setpass(event.target.value)}
            />
            <label for="repsw">
              <b>Confirm Password</b>
            </label>
            <input
              type="password"
              placeholder="Re-enter Password"
              name="userpsw"
              required
              onChange={(event) => setrepass(event.target.value)}
            />

            <button type="submit" className="btn3" onClick={enterUser}>
              Create Account
            </button>
          </form>
          <h4
            style={{
              textAlign: "center",
              margin: "0",
              fontFamily: "'Edu NSW ACT Foundation', cursive",
              fontSize: "25px",
            }}
          >
            If already a user <Link to="/Login">"Login"</Link> now.
          </h4>
        </div>
     
    </>
  );
}
