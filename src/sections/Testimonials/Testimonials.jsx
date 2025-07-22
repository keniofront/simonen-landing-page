import { useEffect, useState } from 'react';
import Carousel from './Carousel.jsx';
import styles from './Testimonials.module.css';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

function Testimonials() {
	const [testimonials, setTestimonials] = useState([]);

	useEffect(() => {
		const fetchTestimonials = async () => {
			try {
				// Faz uma requisição GET à API local para buscar depoimentos
				const response = await fetch('http://localhost:3002/depoimentos');
				const data = await response.json();

				// Atualiza o estado com os dados recebidos da API
				setTestimonials(data);
			} catch (err) {
				// Captura e exibe erros no console caso a requisição falhe
				console.error('Erro ao buscar depoimentos', err);
			}
		};

		// Chamada inicial para buscar os dados da API
		fetchTestimonials();
	}, []);

	return (
		<section id="testimonials" className={`section ${styles.section}`}>
			<div className={`container ${styles.container}`}>
				{/* Bloco com título e descrição da seção */}
				<SectionHeader section={'Depoimentos'} title={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit est quo commodi earum. Vel!'} description={'Somos especialistas em desenvolvimento web, com foco em performance, design e UX. Nosso time conta com profissionais experientes em frontend, backend e UI/UX.'} align="center" />

				{/* Carrossel dinâmico com os depoimentos */}
				<Carousel items={testimonials} itemsPerPage={4} />
			</div>
		</section>
	);
}

export default Testimonials;
