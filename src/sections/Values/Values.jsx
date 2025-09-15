import styles from "./Values.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

// IMAGES
import image1 from '../../assets/values/01.png'
import image2 from '../../assets/values/02.png'
import image3 from '../../assets/values/03.png'
import image4 from '../../assets/values/04.png'

export const values = [
  {
    title: "Tecnologia de Ponta",
    desc: "Investimos continuamente em inovação para garantir soluções modernas, conectadas e seguras.",
    foto: image1,
  },
  {
    title: "Engenharia Especializada",
    desc: "Contamos com uma equipe técnica altamente qualificada, com know-how em grandes obras e processos industriais.",
    foto: image2,
  },
  {
    title: "Segurança em Primeiro Lugar",
    desc: "Todos os projetos seguem normas como NR-12, NR-10, e ABNT. Equipe  treinadas e com documentação.",
    foto: image3,
  },
  {
    title: "Cobertura Nacional",
    desc: "Atendimento técnico e logístico em todo o Brasil, com suporte presencial e remoto.",
    foto: image4,
  },
];

export default function Values() {
  return (
    <section id="values" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <SectionHeader className={styles.sectionHeaderCustom} section={"Por que a Simonsen?"} title={"Não entregamos apenas produtos. Entregamos confiança industrial."} />

        <div className={styles.cards}>
          {values.map((service, index) => {
            return (
              <div className={styles.card} key={index}>
                <img src={service.foto} alt={service.title} />

                <div className={styles.cardText}>
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
