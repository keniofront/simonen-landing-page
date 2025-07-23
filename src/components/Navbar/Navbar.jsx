import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { navbarLinks } from "../../data/data";
import logo from "../../assets/logo-horizontal.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // -------------------------------------------------------

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logoContainer} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className={styles.logo}></span>
        </div>

        {/* RENDERIZAÇÃO DE LISTAS DINÂMICA */}
        <div className={`${styles.links} ${isOpen ? styles.active : ""}`}>
          {navbarLinks.map((link) => (
            <a key={link.id} href={link.url} onClick={() => setIsOpen(false)}>
              {link.title}
            </a>
          ))}
        </div>
      </div>

      {/* MENU RESPONSIVO */}
      <div className={`${styles.hamburger} ${isOpen ? styles.ativo : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
