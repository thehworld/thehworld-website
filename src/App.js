import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Blogs />} path="/blogs" />
        <Route element={<BlogDetails />} path="/blogdetails" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
