import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFoundPage from "./pages/404Page";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import CommentsPage from "./pages/CommentsPage";
import Settings from "./pages/Settings";
import ProductOverview from "./pages/ProductOverview";
import Navbar from "./utils/components/navigation/Navbar";
import Footer from "./utils/components/navigation/Footer";
import SettingsAuthenticated from "./pages/SettingsAuthenticated";
import ProfilePage from "./pages/ProfilePage";
import FavouriteProducts from "./pages/FavouritesPage";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settingsauth" element={<SettingsAuthenticated />} />
        <Route path="/products" element={<ProductOverview />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/favourites" element={<FavouriteProducts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
