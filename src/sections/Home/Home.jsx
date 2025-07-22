import background from "../../assets/background.jpg";
import heroFeature from "../../assets/hero-feature.png";
import ButtonLarge from "../../components/Button/ButtonLarge";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section id="home" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* container de texto */}
        <div className={`${styles.text}`}>
          <h1 className={styles.desktop}>Impulsione seu negócio com soluções inovadoras e personalizadas</h1>
          <h3 className={styles.desktop}>Na [Nome da Empresa], combinamos expertise, tecnologia e estratégia para transformar desafios em oportunidades reais de crescimento.</h3>
          <h1 className={styles.mobile}>Impulsione seu negócio</h1>
          <h3 className={styles.mobile}>Transformamos desafios em oportunidades reais de crescimento.</h3>
          <ButtonLarge text="Fale com um Especialista" />
        </div>

        {/* container com imagem */}
        <div className={`${styles.heroFeature}`}>
          <img src={heroFeature} alt="Hero Feature" />
        </div>
      </div>

      {/* fundo */}
      <div className={styles.background} style={{ backgroundImage: `url(${background})` }}></div>
    </section>
  );
}
