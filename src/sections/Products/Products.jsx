import styles from "./Products.module.css";
import { products } from "../../data/data";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

export default function Products() {
  return (
    <section id="products" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <SectionHeader section={"O Que Fornecemos (PRODUCTS)"} title={"Potência, confiabilidade e segurança em cada equipamento"} description={"Oferecemos uma linha completa de equipamentos para elevação e movimentação de cargas com alto desempenho e conformidade com as normas técnicas brasileiras e internacionais."} align="left" />
        </div>

        <div className={styles.cards}>
          {products.map((service, index) => {
            return (
              <div className={styles.card} key={index} style={{ backgroundImage: `url(${service.foto})` }}>
                <div className={styles.hover}>
                  <h3>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
