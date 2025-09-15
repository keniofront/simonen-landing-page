import { useState, useEffect } from "react";
import styles from "./Modal.module.css";

// Icons
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Caroussel Component
function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.carousel}>
      <img src={images[index]} alt={`Slide ${index + 1}`} loading="lazy" className={styles.image} />

      {/* Navigation */}
      <button className={`${styles.nav} ${styles.left}`} onClick={prev}>
        <IoIosArrowBack />
      </button>
      <button className={`${styles.nav} ${styles.right}`} onClick={next}>
        <IoIosArrowForward />
      </button>
    </div>
  );
}

// Main Component
export default function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          <IoMdCloseCircleOutline />
        </button>

        <Carousel images={project.images} />

        <div className={styles.content}>
          <h3>{project.company}</h3>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}
