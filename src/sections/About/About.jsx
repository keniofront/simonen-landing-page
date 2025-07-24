import styles from "./About.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

export default function About() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* coluna esquerda */}
        <div className={styles.text}>
          <SectionHeader
            section={"Sobre Nós (ABOUT)"}
            title={"Há mais de 15 anos, conectando engenharia, inovação e eficiência"}
            description={
              <>
                <p>A Simonsen do Brasil é uma empresa referência nacional em soluções industriais para movimentação de cargas, unindo tecnologia, engenharia especializada e equipamentos robustos para atender aos desafios de grandes operações. </p>
                <br />
                <p>Com uma abordagem consultiva, entregamos mais que produtos: oferecemos projetos completos, suporte técnico e integração total com os processos industriais dos nossos clientes.</p>
                <br />
                <p>Atuamos com excelência nos setores de:</p>
              </>
            }
          />

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
