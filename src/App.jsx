import "./App.css";
import FlatDetail from "./components/FlatDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/blog" exact element={<Blog/>}></Route>
      <Route path="/blog/:id" element={<BlogDetail/>}></Route> */}
        <Route path="/flat/:slug" element={<FlatDetail />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
