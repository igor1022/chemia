// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">🛍️ Мой Магазин</div>
        <ul className="navbar-links">
          <li><Link to="/">Витрина</Link></li>
          <li><Link to="/cart">Корзина</Link></li>
          <li><Link to="/checkout">Оформление</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
