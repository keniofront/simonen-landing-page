import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

// Navlinks
export const navbarLinks = [
  { title: "Sobre", url: "#about" },
  { title: "Serviços", url: "#services" },
  { title: "Cases", url: "#cases" },
  { title: "Depoimentos", url: "#testimonials" },
  { title: "Contato", url: "#contact" },
];

// Default Component
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
    <nav className={`section ${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logoContainer} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className={styles.logo}></span>
        </div>

        {/* Renderização de listas dinâmica */}
        <div className={`${styles.links} ${isOpen ? styles.active : ""}`}>
          {navbarLinks.map((link, index) => (
            <a key={index} href={link.url} onClick={() => setIsOpen(false)}>
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
