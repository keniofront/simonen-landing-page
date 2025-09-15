import styles from "./Products.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

// IMAGES
import image1 from "../../assets/products/01.jpg";
import image2 from "../../assets/products/02.jpg";
import image3 from "../../assets/products/03.jpg";

export const products = [
  {
    title: "Guindastes Industriais",
    desc: "Modelos de alta capacidade, versáteis e ideais para operações em ambientes complexos. Suporte técnico garantido.",
    foto: image1,
  },
  {
    title: "Pórticos Móveis e Fixos",
    desc: "Projetados para suportar cargas extremas com estabilidade e precisão, ideais para pátios, portos e indústrias pesadas.",
    foto: image2,
  },
  {
    title: "Pontes Rolantes",
    desc: "Soluções sob medida para movimentação horizontal em galpões, centros logísticos e áreas fabris.",
    foto: image3,
  },
];

export default function Products() {
  return (
    <section id="products" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionHeaderContainer}>
          <SectionHeader section={"O Que Fornecemos"} title={"Potência, confiabilidade e segurança"} description={"Oferecemos uma linha completa de equipamentos para elevação e movimentação de cargas com alto desempenho e conformidade com as normas técnicas brasileiras e internacionais."} align="left" />
        </div>

        <div className={styles.cards}>
          {products.map((service, index) => {
            return (
              <div className={styles.card} key={index}>
                <div className={styles.imageContainer}>
                  <img src={service.foto} alt="product" />
                </div>
                <div className={styles.text}>
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
