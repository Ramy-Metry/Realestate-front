import "./App.css";
// import FlatDetail from "./components/FlatDetail";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Agent from "./portals/Agent";
// import Contact from "./components/Contact";
// import About from "./components/About";
// import Blog from "./components/Blog";
// import BlogDetail from "./components/BlogDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
   
      {/* <Route path="/" exact component={Home}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/blog" exact component={Blog}></Route>
      <Route path="/blog/:id" component={BlogDetail}></Route>
      <Route path="/flat/:slug" component={FlatDetail}></Route> */}
      <Route path="/white-house/*" element={<Agent/>}/>
 
    </Routes>
  );
}

export default App;
