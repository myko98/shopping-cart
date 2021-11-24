import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import Home from "./containers/Home";
import Checkout from "./containers/Checkout";
import ShoppingItem from "./containers/ShoppingItem";
import ItemDetail from "./containers/ItemDetail";
import menData from "./assets/men/menData";
import womenData from "./assets/women/womenData";

import { ItemContext } from "./components/ItemContext";

import {
  Navbar,
  Container,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";

const RouteSwitch = () => {
  const [men, setMen] = useState(menData);
  const [women, setWomen] = useState(womenData);

  const [basket, setBasket] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let total = 0;

    let newMenBasket = men.filter((item) => Boolean(item.quantity));
    let newWomenBasket = women.filter((item) => Boolean(item.quantity));

    newMenBasket.map((item) => {
      total = total + item.quantity * item.price;
    });
    newWomenBasket.map((item) => {
      total = total + item.quantity * item.price;
    });
    setSubTotal(total);

    let newBasket = newMenBasket.concat(newWomenBasket);
    setBasket(newBasket);
  }, [men, women]);

  return (
    <>
      <Router>
        <Navbar className="navBar" bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Uniqlo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto navRight">
                <Link className="link" to="/">Home</Link>
                <NavDropdown title="Shop" id="basic-nav-dropdown">
                  <Link className="link" to="/men">Men</Link>
                  <NavDropdown.Divider />
                  <Link className="link" to="/women">Women</Link>
                </NavDropdown>
                <Link className="link" to="/checkout">Checkout</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      
        <ItemContext.Provider
          value={{ men, setMen, women, setWomen, subTotal }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<ShoppingItem men={men} />} />
            <Route path="/women" element={<ShoppingItem women={women} />} />
            <Route path="/checkout" element={<Checkout basket={basket} />} />
            <Route
              path="/men/:id"
              element={<ItemDetail men={men} setMen={setMen} />}
            />
            <Route
              path="/women/:id"
              element={<ItemDetail women={women} setWomen={setWomen} />}
            />
          </Routes>
        </ItemContext.Provider>
      </Router>
    </>
  );
};

export default RouteSwitch;
