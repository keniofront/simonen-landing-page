import styles from "./Services.module.css";
import { services } from "../../data/data";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <SectionHeader center section={"Nossa Especialidade (SERVICES)"} title={"Engenharia aplicada ao resultado: projetos completos para movimentação industrial"} description={<p>Na Simonsen do Brasil, o serviço não termina na entrega do equipamento — começa com o entendimento técnico das suas necessidades.</p>}/>

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
