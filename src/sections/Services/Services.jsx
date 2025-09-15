import styles from "./Services.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

// IMAGES
import image1 from '../../assets/services/01.jpg'
import image2 from '../../assets/services/02.jpg'
import image3 from '../../assets/services/03.jpg'
import image4 from '../../assets/services/04.jpg'

export const services = [
  {
    title: "Projetos de Engenharia Industrial",
    desc: "Desenvolvemos soluções completas para movimentação de cargas, desde o dimensionamento até a implantação.",
    foto: image1,
  },
  {
    title: "Montagem e Instalação Técnica",
    desc: "Nossa equipe realiza instalações com precisão e segurança, dentro do cronograma e com mínimo impacto operacional.",
    foto: image2,
  },
  {
    title: "Manutenção Preventiva",
    desc: "Planos inteligentes que evitam paradas não programadas e prolongam a vida útil dos seus equipamentos.",
    foto: image3,
  },
  {
    title: "Consultoria Técnica Especializada",
    desc: "Diagnóstico e recomendação de melhorias com foco em eficiência operacional, segurança no trabalho e redução de custos com falhas.",
    foto: image4,
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <SectionHeader className={styles.sectionHeader} section={"Nossa Especialidade"} title={"Projetos completos para movimentação industrial"} description={"Na Simonsen do Brasil, o serviço não termina na entrega do equipamento — começa com o entendimento técnico das suas necessidades."} />

        <div className={styles.cards}>
          {services.map((service, index) => {
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
