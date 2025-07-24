import { useState } from "react";
import styles from "./Carousel.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function TestimonialCard({ avatar, name, job, message }) {
  return (
    <div className={styles.card}>
      <img src={avatar} alt={`Foto de ${name}`} className={styles.avatar} />
      <h3>{name}</h3>
      <p className={styles.job}>{job}</p>
      <p className={styles.message}>"{message}"</p>
    </div>
  );
}

export default function Carousel({ items, itemsPerPage }) {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [page, setPage] = useState(0);
  const nextPage = () => setPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  const currentItems = items.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  return (
    <div className={styles.carouselContainer}>
      {/* Botão anterior */}
      <button onClick={prevPage} className={styles.navButton} aria-label="Anterior">
        <IoIosArrowBack />
      </button>

      {/* Carrossel de depoimentos */}
      <div className={styles.carousel}>
        {currentItems.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </div>

      {/* Botão próximo */}
      <button onClick={nextPage} className={styles.navButton} aria-label="Próximo">
        <IoIosArrowForward />
      </button>

      {/* Paginação visual com bolinhas */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <span key={i} className={`${styles.dot} ${i === page ? styles.active : ""}`}></span>
        ))}
      </div>
    </div>
  );
}
