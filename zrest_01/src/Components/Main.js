import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../Test";
import Nav from "./Nav";
import Offers from "./Offers";

export default class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <Offers />
        <hr
          style={{
            border: "1px solid #B27B60",
            width: "70%",
            marginLeft: "15%",
            marginTop: "3%",
          }}
        />
        <h2> Search for what you want??</h2>
        <input
          type="text"
          id="searchInput"
          placeholder="Search for your favourite restaurants here..."
        />
        <div className="restaurantContainer">
          
          {data.restaurants.map((item) => (
            <div id="c">
              <div className="product-details">
                <h2>{item.name}</h2>
                <br></br>

                <p className="information">
                  <b>Find Near: </b>
                  {item.neighborhood},<br /> <br />
                  <b>At: </b>
                  {item.address},<br />
                  <b>What You'll Find: </b>
                  {item.cuisine_type}
                </p>

                <div className="control">
                  <Link
                    to="/restrauntpage"
                    className="btn5"
                    onClick={this.props.open}
                    id={item.id}
                  >
                    Book&nbsp;and&nbsp;Visit
                  </Link>
                </div>
              </div>

              <div className="product-image">
                <img src={item.photograph} alt=".." />

                <div className="info">
                  <h2> Top Reviews By</h2>
                  {Object.values(item.reviews).map((data) => (
                    <h2> {data.name} </h2>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr
          style={{
            border: "1px solid #B27B60",
            width: "70%",
            marginLeft: "15%",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        />
      </>
    );
  }
}
