import React from "react";
import Nav from "./Nav";
import data from "../Test";
export default function About() {
  return (
    <div>
      <Nav />
      <h1 style={{ textDecoration: "underline" }}>About Us</h1>
      <div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1566963493871-ETXLCH49FLZUB3A0Y1QT/yangskitchen_01.png?format=750w"
          alt="..."
          style={{
            margin: "5% 25%",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            opacity: "1",
          }}
        />
      </div>
      <hr
        style={{
          border: "1px solid black",
          width: "70%",
          marginLeft: "15%",
          marginBottom: "0.5%",
        }}
      />
      <h2>Our Mission </h2>
      <h4
        style={{
          textAlign: "center",
          margin: "2% 5%",
          fontFamily: "'Edu NSW ACT Foundation', cursive",
          fontSize: "larger",
        }}
      >
        Food and Fun strives to source local, sustainable and organic when
        possible. We work hard to source premium information so that you may sit
        and relax with your loved ones and spend time creating memories,
        "unforgottable". We wish to achieve this by bringing yiu the correct
        information regarding the restaurants available nearby along with their
        contacts, locations, cuisine preferences and yes ofcourse the reviews.
        "Fedup of searching for the right place to dine in??" Don't worry we
        have the solutions!! Just scroll and get millions of options right here.
      </h4>
      <hr
        style={{
          border: "1px solid black",
          width: "70%",
          marginLeft: "15%",
          marginBottom: "0.5%",
        }}
      />
      <h2> COVID Safe Atmosphere</h2>
      <div className="aboutContainer">
        <img
          src="data:image/png;base64,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"
          alt="..."
          style={{
            margin: "6%",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            opacity: "1",
          }}
        />
        <h4
          style={{
            textAlign: "center",
            margin: "10% 5%",
            fontFamily: "'Edu NSW ACT Foundation', cursive",
            fontSize: "larger",
          }}
        >
          The whole world is now facing the battle against the severe and
          dangerous pandemic COVID-19, which is not only physically harming, but
          also mentally disturbing because of the unceasingly escalating number
          of affected patients and deaths globally. In India, the containment
          strategies constitute in identifying, tracing-contacts, quarantine,
          social distancing, and following other health advisories. The current
          treatment protocols include real-time PCR test and Point-of-Care
          molecular diagnostic assays for its diagnosis; some states in India
          have begun the pool testing.
        </h4>
      </div>
      <hr
        style={{
          border: "1px solid black",
          width: "70%",
          marginLeft: "15%",
          marginBottom: "0.5%",
        }}
      />
      <h2> Our Collaborators </h2>
      <div>
        {data.restaurants.map((item) => (
          <h4
            style={{
              textAlign: "center",
              margin: "5%",
              fontFamily: "'Edu NSW ACT Foundation', cursive",
              fontSize: "larger",
            }}
          >
            {item.name}
            <br />
            {item.address}
            <br />
            {item.cuisine_type}
          </h4>
        ))}
      </div>
      <hr
        style={{
          border: "1px solid black",
          width: "70%",
          marginLeft: "15%",
          marginBottom: "0.5%",
        }}
      />
    </div>
  );
}
