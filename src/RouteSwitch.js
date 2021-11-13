import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Checkout from "./containers/Checkout";
import Men from "./containers/Men";
import Women from "./containers/Women";
import ItemDetail from "./containers/ItemDetail"

import {
  Navbar,
  Container,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";

const RouteSwitch = () => {
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
                <Link to="/checkout">Checkout</Link>

                <NavDropdown title="Shop" id="basic-nav-dropdown">
                  <Link to="/men">
                    Men
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/women">
                    Women
                  </Link>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/men/:id" element={<ItemDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouteSwitch;
