import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />
    {/* <main className="main-content"></main>  */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </Router>
  );
}

