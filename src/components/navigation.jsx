import React, { useState, useEffect } from "react";
import logo from "../data/logo.jpg.png";
import styles from './Header.module.css'; // Import the CSS Module

export const Navigation = (props) => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Close mobile menu when clicking outside of the menu
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen && 
        !event.target.closest(`#menu`) // If click is outside the menu
      ) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the menu when a navigation link is clicked
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      id="menu"
      className={`${styles.navbar} ${scrolling ? styles.navbarScrolled : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.navbarHeader}>
          <div className={styles.logoContainer}>
            <img
              src={logo}
              alt="logo"
              className={styles.logo}
            />
            <a
              className={`${styles.navbarBrand} ${scrolling ? styles.scrolling : ''}`}
              href="#page-top"
            >
              Adept Knowledge Technologies
            </a>
          </div>
          <button
            type="button"
            className={`${styles.navbarToggle} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
          >
            <span className={styles.iconBar}></span>
            <span className={styles.iconBar}></span>
            <span className={styles.iconBar}></span>
          </button>
        </div>
        <div
          className={`${styles.navbarCollapse} ${isMobileMenuOpen ? styles.show : ''}`}
        >
          <ul className={styles.navbarNav}>
            <li>
              <a href="#about" className={styles.pageScroll} onClick={handleNavLinkClick}>About Us</a>
            </li>
            <li>
              <a href="#features" className={styles.pageScroll} onClick={handleNavLinkClick}>Services</a>
            </li>
            <li>
              <a href="#team" className={styles.pageScroll} onClick={handleNavLinkClick}>Our Team</a>
            </li>
            <li>
              <a href="#contact" className={styles.pageScroll} onClick={handleNavLinkClick}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
