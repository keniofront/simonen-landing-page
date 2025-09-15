import styles from "./About.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

export default function About() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* coluna esquerda */}
        <div className={styles.text}>
          <SectionHeader section={"Sobre Nós"} title={"Há mais de 15 anos, conectando engenharia, inovação e eficiência"} />

          <div className={styles.history}>
            <p>A Simonsen do Brasil é uma empresa referência nacional em soluções industriais para movimentação de cargas, unindo tecnologia, engenharia especializada e equipamentos robustos para atender aos desafios de grandes operações.</p>
            <p>Com uma abordagem consultiva, entregamos mais que produtos: oferecemos projetos completos, suporte técnico e integração total com os processos industriais dos nossos clientes.</p>
            <p>Atuamos com excelência nos setores de:</p>
          </div>

          <div className={styles.cards}>
            <div className={styles.card}>
              <p>Construção Civil </p>
            </div>

            <div className={styles.card}>
              <p>Indústria Metalúrgica</p>
            </div>

            <div className={styles.card}>
              <p>Mineração</p>
            </div>

            <div className={styles.card}>
              <p>Logística Portuária</p>
            </div>

            <div className={styles.card}>
              <p>Manufatura Industrial</p>
            </div>
          </div>
        </div>

        {/* coluna direita */}
        <div className={styles.imageContainer}>
          <div className={styles.image}></div>
        </div>
      </div>
    </section>
  );
}
