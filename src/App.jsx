import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SignUp from "./pages/signUp";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signUp" element={<SignUp />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;