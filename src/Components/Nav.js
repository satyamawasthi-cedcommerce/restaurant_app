import React from "react";
import { Link } from "react-router-dom";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export default function Nav() {
  return (
    <div>
      <h1>
        <RestaurantIcon style={{ fontSize: "larger" }} /> Food & Fun{" "}
      </h1>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contacts">Contact</Link>
        </li>
        <li style={{ float: "right" }}>
          <Link to="/Login">Login </Link>
        </li>
      </ul>
      <div></div>
      <h1 className="offerHeading">
        {" "}
        Hurry up!! "Register" and claim your offers as soon as possible.
      </h1>

      <img
        src="https://img.freepik.com/premium-vector/people-cafe-flat-illustration-cartoon-friend-couple-characters-sitting-tables-dining-talking-ordering-dinner-food-from-waiter-restaurant-cafeteria-interior-isolated_213110-520.jpg?w=2000"
        alt="..."
        style={{
          width: "60%",
          marginTop: "1%",
          opacity: "1",
          marginLeft: "20%",
        }}
      />
      <hr
        style={{
          border: "1px solid #B27B60",
          width: "70%",
          marginLeft: "15%",
          marginBottom: "0.5%",
        }}
      />
    </div>
  );
}
