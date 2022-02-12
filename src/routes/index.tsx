import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Product } from "../pages/product";
import { Cart } from "../pages/cart";
import { Checkout } from "../pages/checkout";
import { Index } from "../pages";
import { Header } from "../features/header";
import { FooterFeature } from "../features/footer";

export function AppRouter() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
      <FooterFeature />
    </>
  );
}
