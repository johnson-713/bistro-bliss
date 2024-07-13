import { About } from "../components/About";
import { BookATable } from "../components/BookATable";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Menu } from "../components/Menu";
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
        <Route path="/contact" element={<BookATable />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book-table" element={<BookATable />} />
      </Routes>   
      <Footer />
    </Router>
  );
}

export default App;
