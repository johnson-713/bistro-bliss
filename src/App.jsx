import { About } from "../components/About";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element="" />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element="" />
        <Route path="/menu" element="" />
      </Routes>   
    </Router>
  );
}

export default App;
