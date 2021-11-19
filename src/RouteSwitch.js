import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import Home from "./containers/Home";
import Checkout from "./containers/Checkout";
import ShoppingItem from "./containers/ShoppingItem";
import Women from "./containers/Women";
import ItemDetail from "./containers/ItemDetail";
import menData from "./assets/men/menData";
import womenData from "./assets/women/womenData";

import {
  Navbar,
  Container,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";

const ItemContext = React.createContext({});

const RouteSwitch = () => {
  const [men, setMen] = useState(menData);
  const [women, setWomen] = useState(womenData);

  const [basket, setBasket] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let total = 0;

    let newMenBasket = men.filter((item) => Boolean(item.quantity));
    let newWomenBasket = women.filter((item) => Boolean(item.quantity));

    console.log(newMenBasket);
    newMenBasket.map((item) => {
      total = total + item.quantity * item.price;
    });
    setSubTotal(total);

    console.log(subTotal);

    let newBasket = newMenBasket.concat(newWomenBasket);
    setBasket(newBasket);
  }, [men, women]);

  return (
    <>
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Uniqlo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto navRight">
                <Link to="/">Home</Link>
                <NavDropdown title="Shop" id="basic-nav-dropdown">
                  <Link to="/men">Men</Link>
                  <NavDropdown.Divider />
                  <Link to="/women">Women</Link>
                </NavDropdown>
                <Link to="/checkout">Checkout</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <ItemContext.Provider value="hi">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<ShoppingItem men={men} />} />
            <Route path="/women" element={<ShoppingItem women={women} />} />
            <Route path="/checkout" element={<Checkout basket={basket} />} />
            <Route path="/men/:id" element={<ItemDetail men={men} setMen={setMen} />}/>
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
