import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route path="/" exact  element={<Home />} />
          {/* <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
