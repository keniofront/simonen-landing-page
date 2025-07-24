import styles from "./Values.module.css";
import { values } from "../../data/data";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

export default function Values() {
  return (
    <section id="values" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <SectionHeader center section={"Por que a Simonsen? (Values)"} title={"Não entregamos apenas produtos. Entregamos confiança industrial."} />

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
