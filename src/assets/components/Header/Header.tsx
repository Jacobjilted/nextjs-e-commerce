// src/assets/components/Header/Header.tsx
"use client"; // This directive marks the component as a client component

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css"; // Import your CSS module

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">VAER</Link>
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">All Products</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/checkout">Checkout</Link>
            </li>
            <li>
              <Link href="/track-order">Track Order</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
