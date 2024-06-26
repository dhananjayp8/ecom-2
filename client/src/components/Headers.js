import React from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Headers = () => {
  const { carts } = useSelector((state) => state.allCart);
  console.log(carts);
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        style={{ height: "60px", background: "black", color: "white" }}
      >
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-2">
            <Navbar.Brand href="#home">Food-Cart</Navbar.Brand>
          </NavLink>
          <NavLink to="/cart" className="text-decoration-none text-light mx-2">
            <div id="ex4">
              <span
                className="p1 fa-stack fa-2x has-badge"
                data-count={carts.length}
              >
                <i class="fa-solid fa-cart-shopping"></i>
              </span>
            </div>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
