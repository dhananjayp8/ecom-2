import React from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

const Headers = () => {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        style={{ height: "60px", background: "black", color: "white" }}
      >
        <Container>
          <Navbar.Brand href="#home">Online Food</Navbar.Brand>
          <div id="ex4">
            <span className="p1 fa-stack fa-2x has-badge" data-count={1}>
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
