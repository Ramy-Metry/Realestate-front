// import "./App.css";
// import FlatDetail from "../components/FlatDetail";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/agent/Home";
import Contact from "../components/Contact";
import About from "../components/About";
// import Blog from "../components/Blog";
// import BlogDetail from "../components/BlogDetail";
import { Route, Routes,useLocation  } from "react-router-dom";
import AdminLogin from "../components/agent/AdminLogin";
import AddProperty from "../components/agent/AddProperty"

function Agent() {
  const location = useLocation();
  console.log(location)

  return (
    <div>
       {location.pathname !== "/white-house/login" && <Header />}
     
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/contact"  element={<Contact />}/>
        <Route path="/about"  element={<About />}/>
        <Route path="/login" element={<AdminLogin/>}/>
        <Route path="/add-property" element={<AddProperty/>}/>
     {/* <Route path="/" exact component={Home}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/blog" exact component={Blog}></Route>
      <Route path="/blog/:id" component={BlogDetail}></Route>
      <Route path="/flat/:slug" component={FlatDetail}></Route> */}
      </Routes>
      {location.pathname !== "/white-house/login" && <Footer />}

    </div>
  );
}

export default Agent;
