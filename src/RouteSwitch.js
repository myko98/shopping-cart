import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import Home from "./containers/Home";
import Checkout from "./containers/Checkout";
import Men from "./containers/Men";
import Women from "./containers/Women";
import ItemDetail from "./containers/ItemDetail"
import menData from "./assets/men/menData"

import {
  Navbar,
  Container,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";

const RouteSwitch = () => {

  const [men,setMen] = useState(menData);

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
                  <Link to="/men">
                    Men
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/women">
                    Women
                  </Link>
                </NavDropdown>
                <Link to="/checkout">Checkout</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men men={men}/>} />
          <Route path="/women" element={<Women />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/men/:id" element={<ItemDetail men={men} setMen={setMen} />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouteSwitch;
