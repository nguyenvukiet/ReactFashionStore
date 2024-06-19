import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import PdpPage from "./../pages/pdpPage";
import BlogPage from "./../pages/blogPage";
import BlogDePage from "./../pages/blogDePage";
import CheckoutPage from './../pages/checkoutPage';
import CheckoutDonePage from './../pages/check-done';
import AboutPage from './../pages/about';






const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<PdpPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout-done" element={<CheckoutDonePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
  );
};

export default Routers;
