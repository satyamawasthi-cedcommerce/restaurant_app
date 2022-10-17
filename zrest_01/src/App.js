import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contacts from "./Components/Contacts";
import Main from "./Components/Main";
import About from "./Components/About";
import React, { useState } from "react";
import Restrauntpage from "./Components/Restrauntpage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
export default function App() {
  const [id, setId] = useState("");
  const [userArr, setuserArr] = useState([]);
  const openRestaurant = (event) => {
    setId(event.target.id);
  };

  

  return (
    <>
      <Routes>
        <Route path="/" element={<Main open={openRestaurant} />}>
          {" "}
        </Route>
        <Route path="/Contacts" element={<Contacts />}>
          {" "}
        </Route>
        <Route path="/About" element={<About />}>
          {" "}
        </Route>
        <Route
          path="/restrauntpage"
          element={<Restrauntpage id={id} />}
        ></Route>
        <Route path="/Login" element={<Login setuserArr={setuserArr}  userArr={userArr}/>}></Route>
        <Route
          path="/Signup"
          element={<Signup userArr={userArr} setuserArr={setuserArr} />}
        ></Route>
      </Routes>
    </>
  );
}
