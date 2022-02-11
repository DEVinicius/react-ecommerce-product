import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Index } from "../pages";
import { Cart } from "../pages/cart";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}
