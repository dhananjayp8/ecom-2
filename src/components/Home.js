import React, { useState } from "react";
import "./Style.css";
import Cardsdata from "./CartData";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
const Home = () => {
  const [cartData, setCartData] = useState(Cardsdata);
  return (
    <>
      <section className="iteam_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: 400 }}>
          Restaurants in Delhi Open now
        </h2>
      </section>
    </>
  );
};

export default Home;
