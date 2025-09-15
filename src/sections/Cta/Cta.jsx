import Button from "../../components/Button/Button";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import styles from "./Cta.module.css";

export default function Cta() {
  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`section ${styles.section}`}>
      <div className={styles.textContent}>
        <div className={styles.leftText}>
          <SectionHeader white className={styles.sectionHeaderCustom} section={"Nossa Especialidade"} title={"Engenharia aplicada ao resultado. Projetos completos para movimentação industrial"} />

          <Button className={styles.button} onClick={() => handleClick("contact")} text="Solicite um orçamento" />
        </div>

        <div className={styles.rightText}></div>
      </div>

      <div className={styles.backgroundContent}>
        <div className={styles.leftBack}></div>
        <div className={styles.rightBack}></div>
      </div>
    </div>
  );
}
2;
