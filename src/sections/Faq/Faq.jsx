import { useState } from 'react';
import styles from './Faq.module.css'; // Importação dos estilos CSS Modules
import { faqData } from '../../data/data'; // Dados das perguntas e respostas
import ButtonLarge from '../../components/Button/ButtonLarge'; // Botão reutilizável
import imagem from '../../assets/image.png'; // Imagem ilustrativa
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { FaRegSmileWink } from "react-icons/fa";


// Componente individual para cada item de FAQ (pergunta e resposta)
const FaqItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false); // Estado para alternar a resposta

	return (
		<div className={`card ${styles.faqItem}`}>
			{/* Ao clicar na pergunta, alterna entre mostrar/ocultar resposta */}
			<div className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
				{question}
				{/* Ícone + que pode mudar de estilo se estiver aberto */}
				<span className={`${styles.plusIcon} ${isOpen ? styles.open : ''}`}>+</span>
			</div>

			{/* Se isOpen for true, mostra essa resposta */}
			{isOpen && <div className={styles.faqAnswer}>{answer}</div>}
		</div>
	);
};

// Componente principal da sessão FAQ
const Faq = () => {
	return (
		// Div principal da seção.
		<div id='faq' className={`section ${styles.section}`}>
			<div className={`container ${styles.container}`}>
				{/* Cabeçalho da sessão */}
				<SectionHeader hideLine={true} title={'Perguntas Frequentes'} />
				<hr className={styles.line}/>

				{/* Conteúdo principal dividido em perguntas e CTA */}
				<div className={styles.content}>
					{/* Lista de perguntas e respostas */}
					<div className={styles.faqContainer}>
						{faqData.map((item, index) => (
							<FaqItem key={index} question={item.question} answer={item.answer} />
						))}
					</div>

					{/* Card com chamada para ação */}
					<div className={styles.ctaContainer}>
						<div className={`card ${styles.ctaCard}`}>
							<FaRegSmileWink className={styles.cardIcon} />
							<h3>Ficou alguma dúvida?</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sapiente ipsum ea hic? Laudantium, molestias.</p>
							<ButtonLarge text={'Lorem Ipsum!'} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faq;
