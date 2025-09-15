// components
import Button from "../../components/Button/Button";

// images
import heroFront from "../../assets/home/hero-img-front.png";
import stripe from "../../assets/home/back-stripe-texture.jpg";
import brazil from "../../assets/home/icon-brazil.svg";
import crane from "../../assets/home/icon-crane.svg";
import engineering from "../../assets/home/icon-engineering.svg";

// styles
import styles from "./Home.module.css";

export default function Home() {
  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* container de texto */}
        <div className={`${styles.textContainer}`}>
          {/* linha de texto */}
          <div className={styles.textRow}>
            {/* Desktop */}
            <h1 className={styles.desktop}>Soluções inteligentes para movimentação de cargas pesadas</h1>
            <h4 className={styles.desktop}>Guindastes, pórticos, pontes rolantes e serviços técnicos especializados que impulsionam a produtividade e segurança no setor industrial.</h4>

            {/* Mobile */}
            <h1 className={styles.mobile}>Impulsione seu negócio</h1>
            <h4 className={styles.mobile}>Transformamos desafios em oportunidades reais de crescimento.</h4>
            <Button className={styles.button} onClick={() => handleClick("contact")} text="Solicite um orçamento" />
          </div>
          {/* linha de features */}
          <div className={`${styles.textRow} ${styles.featuresContainer}`}>
            <div className={styles.feature}>
              <img src={brazil} alt="" />
              <p>Atendimento em todo o Brasil</p>
            </div>
            <div className={styles.feature}>
              <img src={crane} alt="" />
              <p>Equipamentos de alta performance</p>
            </div>
            <div className={styles.feature}>
              <img src={engineering} alt="" />
              <p>Engenharia sob medida</p>
            </div>
          </div>
        </div>

        {/* container com imagem */}
        <div className={`${styles.heroFront}`}>
          <img src={heroFront} alt="Hero Feature" />
        </div>
      </div>

      {/* tira listrada */}
      <div className={styles.stripeContainer}>
        <img className={styles.stripe} src={stripe} alt="" />
      </div>

      <div className={styles.background}></div>
    </section>
  );
}
