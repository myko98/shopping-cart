import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Checkout from "./containers/Checkout";
import Shopping from "./containers/Shopping";

const RouteSwitch = () => {
  return (
    <>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <Link to="/">
                <li class="nav-item active">Home</li>
              </Link>
              <Link to="/shopping">
                <li class="nav-item">Shop</li>
              </Link>
              <Link to="/checkout">
                <li class="nav-item">Checkout</li>
              </Link>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouteSwitch;
