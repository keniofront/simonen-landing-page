// Importa o ícone de "fechar" da biblioteca react-icons
import { IoMdCloseCircleOutline } from 'react-icons/io';

// Importa hooks do React para trabalhar com estado e efeitos colaterais
import { useState, useEffect } from 'react';

// Importa os estilos específicos para o modal a partir de um módulo CSS
import styles from './Modal.module.css';

// Importa os ícones de seta (esquerda e direita) para navegação no carrossel
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

// ========================
// COMPONENTE CAROUSEL
// ========================
// Exibe um carrossel de imagens com botões de navegação e autoplay
function Carousel({ images }) {
	const [index, setIndex] = useState(0); // Estado para controlar o índice da imagem atual

	// Função para ir para a próxima imagem
	const next = () => setIndex((prev) => (prev + 1) % images.length);

	// Função para voltar para a imagem anterior
	const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

	// Efeito que faz a imagem mudar automaticamente a cada 2 segundos (2000ms)
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % images.length);
		}, 2000);

		// Limpa o intervalo automaticamente ao desmontar o componente
		return () => clearInterval(interval);
	}, [images.length]); // Reexecuta o efeito se o número de imagens mudar

	return (
		<div className={styles.carousel}>
			{/* Exibe a imagem atual do carrossel */}
			<img
				src={images[index]} // URL da imagem atual
				alt={`Slide ${index + 1}`} // Texto alternativo para acessibilidade
				loading="lazy" // Otimização: carrega a imagem apenas quando necessário
				className={styles.image} // Aplica estilos personalizados
			/>

			{/* Botão de navegação para imagem anterior */}
			<button className={`${styles.nav} ${styles.left}`} onClick={prev}>
				<IoIosArrowBack />
			</button>

			{/* Botão de navegação para próxima imagem */}
			<button className={`${styles.nav} ${styles.right}`} onClick={next}>
				<IoIosArrowForward />
			</button>
		</div>
	);
}

// ========================
// COMPONENTE MODAL PRINCIPAL
// ========================
// Exibe um modal com detalhes de um projeto, incluindo carrossel e informações textuais
export default function Modal({ project, onClose }) {
	// Se não houver projeto selecionado, não renderiza nada
	if (!project) return null;

	return (
		// Fundo escuro (backdrop) clicável que fecha o modal
		<div className={styles.backdrop} onClick={onClose}>
			{/* Cartão do modal (impede que clique dentro dele feche o modal) */}
			<div
				className={`card ${styles.modal}`}
				onClick={(e) => e.stopPropagation()} // Evita propagação do clique para o fundo
			>
				{/* Botão para fechar o modal */}
				<button className={styles.close} onClick={onClose}>
					<IoMdCloseCircleOutline />
				</button>

				{/* Carrossel de imagens do projeto */}
				<Carousel images={project.images} />

				{/* Conteúdo textual com informações do projeto */}
				<div className={styles.content}>
					<h2>{project.name}</h2>
					<p>
						<strong>O que foi feito:</strong> {project.description}
					</p>
					<p>
						<strong>Como foi feito:</strong> {project.details}
					</p>
				</div>
			</div>
		</div>
	);
}
