import styles from "./About.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

export default function About() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* coluna esquerda */}
        <div className={styles.text}>
          <SectionHeader section={"Sobre Nós"} title={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit est quo commodi earum. Vel!"} description={"Somos especialistas em desenvolvimento web, com foco em performance, design e UX. Nosso time conta com profissionais experientes em frontend, backend e UI/UX."} />

          <div className={styles.cards}>
            <div className={styles.card}>
              <h4>Construção civil pesada</h4>
            </div>

            <div className={styles.card}>
              <h4>Indústria metalúrgica</h4>
            </div>

            <div className={styles.card}>
              <h4>Mineração</h4>
            </div>

            <div className={styles.card}>
              <h4>Logística portuária</h4>
            </div>

            <div className={styles.card}>
              <h4>Manufatura de grande escala</h4>
            </div>
          </div>
        </div>

        {/* coluna direita */}
        <div className={styles.image}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, amet rerum. Sed similique corporis eveniet.</div>
      </div>
    </section>
  );
}
