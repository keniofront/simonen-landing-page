import styles from "./Footer.module.css";

import logo from "../../assets/logo-horizontal-white.svg";

const Footer = () => {
  return (
    <footer className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.dataContainer}>
          <img src={logo} alt="" />
        </div>

        <div className={styles.dataContainer}>
          <p>
            <strong>© 2025 Simonsen do Brasil</strong>
          </p>
          <p>Todos os direitos reservados</p>
          <p>CNPJ: 00.000.000/0000-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
