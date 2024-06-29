import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

// Pages
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/login/Register";
import About from "../../pages/about/About";
import Contact from "../../pages/about/Contact";
import ProductDetails from "../../pages/products/ProductDetails";
import CommentsPage from "../../pages/account/CommentsPage";
import Settings from "../../pages/account/Settings";
import ProductOverview from "../../pages/products/ProductOverview";
import SettingsAuthenticated from "../../pages/SettingsAuthenticated";
import ProfilePage from "../../pages/account/ProfilePage";
import FavouriteProducts from "../../pages/account/FavouritesPage";
import NotFoundPage from "../../pages/utils/404Page";

const AppRouter = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/comments" element={<CommentsPage />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settingsauth" element={<SettingsAuthenticated />} />
      <Route path="/products" element={<ProductOverview />} />
      <Route path="/favourites" element={<FavouriteProducts />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRouter;
