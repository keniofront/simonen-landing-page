import Button from "../../components/Button/Button";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import styles from "./Cta.module.css";

export default function Cta() {
  return (
    <section id="cta" className={`section ${styles.section}`}>
      <div className={`${styles.container}`}>
        <div className={styles.float}>
          <div className={styles.text}>
            <SectionHeader white section={"Nossa Especialidade (CTA)"} title={"Engenharia aplicada ao resultado. Projetos completos para movimentação industrial"} />
            <Button className={styles.button} text={"Lorem ipsum dolor sit amet"} />
          </div>
          <div className={styles.empty}></div>
        </div>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
    </section>
  );
}
