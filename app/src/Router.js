import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Page from "./pages/404Page";
import About from "./pages/About";
import ChangingMail from "./pages/ChangingMail";
import ChangingName from "./pages/ChangingName";
import ChangingPassword from "./pages/ChangingPassword";
import CommentsPage from "./pages/CommentsPage";
import Contact from "./pages/Contact";
import ProductTracking from "./pages/ProductTracking";
import Searchbalk from "./pages/Searchbalk";
import Settings from "./pages/Settings";
import ProductOvervieuw from "./pages/ProductOvervieuw";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Page" element={<Page />} />
        <Route path="/About" element={<About />} />
        <Route path="/ChangingMail" element={<ChangingMail />} />
        <Route path="/ChangingName" element={<ChangingName />} />
        <Route path="/ChangingPassword" element={<ChangingPassword />} />
        <Route path="/CommentsPage" element={<CommentsPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProductTracking" element={<ProductTracking />} />
        <Route path="/Searchbalk" element={<Searchbalk />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/ProductOvervieuw" element={<ProductOvervieuw />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;