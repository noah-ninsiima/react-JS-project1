import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <img src="/images/logo.png" alt="Faraja Logo" className="logo-image" />
        <div className="logo-text">House of Faraja</div>
        
      </div>
       <nav className="nav-links">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
    </header>
  );
}


