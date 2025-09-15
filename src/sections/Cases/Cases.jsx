import { projects } from "../../data/cases.js";
import { useState } from "react";
import Modal from "./Modal.jsx";
import styles from "./Cases.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

// Card component
function CaseCard({ project, onClick }) {
  return (
    <div className={`${styles.card}`} onClick={() => onClick(project)}>
      <img src={project.thumb} alt={project.company} loading="lazy" />

      <div className={styles.overlay}>
        <span>{project.company}</span>
      </div>
    </div>
  );
}

// Cards Grid
function CasesGrid({ projects, onSelect }) {
  return (
    <div className={styles.grid}>
      {projects.map((p, index) => (
        <CaseCard key={index} project={p} onClick={onSelect} />
      ))}
    </div>
  );
}

// Main Component
export default function Cases() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="cases" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <SectionHeader white className={styles.sectionHeaderCustom} section={"Estudos de Caso"} title={"Transformando desafios em soluções de engenharia"} description={"Na Simonsen Engenharia, transformamos desafios em soluções. Atuamos em projetos de engenharia, montagem e fornecimento de equipamentos de movimentação para empresas líderes como Petrobras, Porto de Suape, Suzano e Vale do Rio Doce. Nesta seção, apresentamos estudos de caso que refletem nossa dedicação à eficiência, segurança e excelência."} />

        <CasesGrid projects={projects} onSelect={setSelected} />

        <Modal project={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
}
