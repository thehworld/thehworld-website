import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Accessories from "./pages/Accessories";
import BlogDetails1 from "./pages/BlogDetails1";
import BlogDetails2 from "./pages/BlogDetails2";

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Blogs />} path="/blogs" />
        <Route element={<Accessories />} path="/accessories/:id" />
        <Route element={<BlogDetails1 />} path="/blogdetails/1" />
        <Route element={<BlogDetails2 />} path="/blogdetails/2" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
