import styles from './About.module.css';
import aboutImage from '../../assets/about-image.jpg';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

export default function About() {
	return (
		<section id='about' className={`section ${styles.section}`}>
			<div className={`container ${styles.container}`}>
				<div className={styles.content}>
					<SectionHeader section={'Sobre Nós'} title={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit est quo commodi earum. Vel!'} description={'Somos especialistas em desenvolvimento web, com foco em performance, design e UX. Nosso time conta com profissionais experientes em frontend, backend e UI/UX.'} />

					<div className={`${styles.cards}`}>
						<div className={`card ${styles.card}`}>
							<h3>Missão</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eius amet optio, nemo aliquid odio?</p>
						</div>
						<div className={`card ${styles.card}`}>
							<h3>Missão</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eius amet optio, nemo aliquid odio?</p>
						</div>
						<div className={`card ${styles.card}`}>
							<h3>Missão</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eius amet optio, nemo aliquid odio?</p>
						</div>
					</div>
				</div>

				<div className={`${styles.imageContainer} `}>
					<img className={styles.image} src={aboutImage} alt='Equipe' />
				</div>
			</div>
		</section>
	);
}
