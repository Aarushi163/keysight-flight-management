import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function Navbar() {
  const { cartItems } = useCart();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/category/electronics`); 
      setSearch("");
    }
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <Link to="/" className="nav-logo">
        Shoppy
      </Link>

      {/* Search */}
      <form className="nav-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Links */}
      <nav className="nav-links">
        <Link to="/category/electronics">Electronics</Link>
        <Link to="/category/men's clothing">Men</Link>
        <Link to="/category/women's clothing">Women</Link>
        <Link to="/cart" className="cart-link">
          🛒 <span className="cart-count">{cartItems.length}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
