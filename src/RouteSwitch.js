import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Checkout from "./components/Checkout";

const RouteSwitch = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
