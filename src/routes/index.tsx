import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Index } from "../pages";
import { Cart } from "../pages/cart";
import { Checkout } from "../pages/checkout";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}
