import { projects } from '../../data/data.js';
import { useState } from 'react';
import Modal from './Modal.jsx';
import styles from './Cases.module.css';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

// Componente interno CaseCard - representa cada "cartão" de projeto
function CaseCard({ project, onClick }) {
	return (
		// Quando o usuário clicar no card, chama a função onClick passando o projeto clicado
		<div className={`card ${styles.card}`} onClick={() => onClick(project)}>
			{/* Imagem do projeto (thumb = miniatura), com carregamento otimizado */}
			<img src={project.thumb} alt={project.name} loading="lazy" />

			{/* Sobreposição visível ao passar o mouse, mostrando o nome do projeto */}
			<div className={styles.overlay}>
				<span>{project.name}</span>
			</div>
		</div>
	);
}

// Componente interno CasesGrid - organiza todos os cards em uma grade
function CasesGrid({ projects, onSelect }) {
	return (
		<div className={styles.grid}>
			{/* Para cada projeto no array, renderiza um CaseCard */}
			{projects.map((p) => (
				<CaseCard key={p.id} project={p} onClick={onSelect} />
			))}
		</div>
	);
}

// COMPONENTE PRINCIPAL
export default function Cases() {
	// Cria um estado chamado selected para guardar o projeto que o usuário clicou (inicialmente null)
	const [selected, setSelected] = useState(null);

	return (
		<section id="cases" className={`section ${styles.section}`}>
			<div className={`container ${styles.container}`}>
				{/* Bloco de Titulo da sessão */}
				<SectionHeader section={'Estudos de Caso'} title={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit est quo commodi earum. Vel!'} description={'Somos especialistas em desenvolvimento web, com foco em performance, design e UX. Nosso time conta com profissionais experientes em frontend, backend e UI/UX.'} />
				

				{/* Renderiza a grade de projetos, passando a função setSelected como manipulador de clique */}
				<CasesGrid projects={projects} onSelect={setSelected} />

				{/* Renderiza o Modal se houver um projeto selecionado (selected !== null) */}
				<Modal project={selected} onClose={() => setSelected(null)} />
			</div>
		</section>
	);
}
