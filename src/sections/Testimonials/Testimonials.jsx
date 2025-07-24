import { useEffect, useState } from "react";
import Carousel from "./Carousel.jsx";
import styles from "./Testimonials.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:3002/depoimentos");
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        console.error("Erro ao buscar depoimentos", err);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* Bloco com título e descrição da seção */}
        <SectionHeader center section={"Depoimentos"} title={"O que nossos clientes dizem"} description={" Conheça alguns dos projetos que transformaram negócios e geraram  resultados expressivos, graças à nossa abordagem estratégica e  inovadora."} />

        {/* Carrossel dinâmico com os depoimentos */}
        <Carousel items={testimonials} itemsPerPage={4} />
      </div>
    </section>
  );
}

export default Testimonials;
