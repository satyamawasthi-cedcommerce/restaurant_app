import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Nav from "./Nav";
import { useState } from "react";
import Main from "./Main";

export default function Login(props) {
  const [loginMail, setloginMail] = useState("");
  const [loginPass, setloginPass] = useState("");
  const [logged, setLogged] = useState(false);
  var navigate= useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    if (loginMail !== "" && loginPass !== "") {
      props.userArr.filter((item) => {
        if (loginMail === item.mail && loginPass === item.pass) {
          setLogged(true);
        }
      });
    }
    navigate("/")
  };
  console.log(props.loginUserArr);
  return (
    <>
      <div>
        
        {logged? (<Main />) :(
        <>
        <form className="containerForm">
          <h1>Login</h1>

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={(event) => setloginMail(event.target.value)}
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            onChange={(event) => setloginPass(event.target.value)}
            required
          />

          <button type="submit" class="btn3" onClick={loginUser}>
            Login
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
          If not a user <Link to="/Signup">"Register"</Link> now.
        </h4>

        <hr
          style={{
            border: "1px solid #B27B60",
            width: "70%",
            marginLeft: "15%",
            marginBottom: "1%",
            marginTop: "1%",
          }}
        />
        
        </>
        )}
      </div>
    </>
  );
}
