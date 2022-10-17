import React from "react";
import Nav from "./Nav";
import data from "../Test";
import PlaceIcon from "@mui/icons-material/Place";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation } from "react-router-dom";

function Restrauntpage(props) {
  const location = useLocation();
  var details = location.state.Details;
  var message = () => {
    alert("Your Booking Has been Confirmed...Happy Dine-in:)");
  };
  return (
    <div>
      <Nav />
      <h2> Know your choice</h2>
      <div className="rc">
        
                  <h4
                    style={{
                      textAlign: "center",
                      margin: "2% 5%",
                      fontFamily: "'Edu NSW ACT Foundation', cursive",
                      fontSize: "43px",
                    }}
                  >
                    {details.name}
                  </h4>
                  <h4
                    style={{
                      textAlign: "center",
                      fontFamily: "'Edu NSW ACT Foundation', cursive",
                      fontSize: "larger",
                    }}
                  >
                    <PlaceIcon />
                    {details.address}
                    <br />
                    {details.neighborhood}
                  </h4>
                  <hr
                    style={{
                      border: "1px solid #B27B60",
                      width: "70%",
                      marginLeft: "15%",
                      marginBottom: "0.5%",
                      marginTop: "1%",
                    }}
                  />
                  <img
                    src={details.photograph}
                    alt="..."
                    style={{
                      margin: "1% 30%",
                      borderRadius: "10px",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      opacity: "1",
                    }}
                  />
                  <h4
                    style={{
                      textAlign: "center",
                      margin: "0",
                      fontFamily: "'Edu NSW ACT Foundation', cursive",
                      fontSize: "30px",
                    }}
                  >
                    {details.cuisine_type}
                  </h4>
                  <button id="bookinbtn" onClick={message}>
                    Confirm Your Booking
                  </button>
                  <hr
                    style={{
                      border: "1px solid #B27B60",
                      width: "70%",
                      marginLeft: "15%",
                      marginBottom: "0.5%",
                      marginTop: "1%",
                    }}
                  />
                  <div>
                    <h2>Know When you can Visit?</h2>
                    <table className="table">
                      <tbody>
                        {Object.keys(details.operating_hours).map((key, index) => {
                          return (
                            <>
                              <tr>
                                <td>
                                  {key} : {details.operating_hours[key]}
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>

                    <hr
                      style={{
                        border: "1px solid #B27B60",
                        width: "70%",
                        marginLeft: "15%",
                        marginBottom: "0.5%",
                        marginTop: "1%",
                      }}
                    />
                    <div></div>
                  </div>
                  <div>
                    <h2>
                      {" "}
                      Know who reviewed your choice{" "}
                      <RateReviewIcon style={{ fontSize: "maedium" }} />
                    </h2>
                    {Object.values(details.reviews).map((data) => (
                      <>
                        <h2>
                          {" "}
                          <PersonIcon />
                          {data.name} <br />
                          <EventAvailableIcon /> {data.date} <br /> Rated "
                          {data.rating}" Stars
                        </h2>
                        <h4
                          style={{
                            textAlign: "center",
                            margin: "1% 20%",
                            fontFamily: "'Edu NSW ACT Foundation', cursive",
                            fontSize: "20px",
                          }}
                        >
                          "{data.comments}"
                        </h4>
                        <hr
                          style={{
                            border: "1px solid #B27B60",
                            width: "50%",
                            marginLeft: "25%",
                            marginBottom: "0.5%",
                            marginTop: "1%",
                          }}
                        />
                      </>
                    ))}
                  </div>
             
      </div>
    </div>
  );
}

export default Restrauntpage;