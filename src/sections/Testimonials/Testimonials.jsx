import Carousel from "./Carousel.jsx";
import styles from "./Testimonials.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import data from "../../data/testimonial.json";

function Testimonials() {
  // Essa variavel é para pegar os dados do json, substituindo o useEffect (json-server)
  const testimonials = data.depoimentos || [];

  return (
    <section id="testimonials" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* Bloco com título e descrição da seção */}
        <SectionHeader className={styles.sectionHeaderCustom} section={"Depoimentos"} title={"O que nossos clientes dizem"} description={" A confiança dos nossos clientes é o maior reconhecimento do trabalho da Simonsen Engenharia. Nesta seção, reunimos depoimentos que destacam a qualidade, a parceria e os resultados alcançados em nossos projetos."} />

        {/* Carrossel dinâmico com os depoimentos */}
        <Carousel items={testimonials} itemsPerPage={4} />
      </div>
    </section>
  );
}

export default Testimonials;

/*

# COMO ESTAVA COM JSON-SERVER

Utilizo essa função para pegar os dados do json-server, simulando uma API real.

```
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
```
*/
