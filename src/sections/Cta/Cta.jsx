import Button from '../../components/Button/Button';
import styles from './Cta.module.css';

export default function Cta() {
	return (
		<section id='cta' className={`section ${styles.section}`}>
			<div className={`container card ${styles.container}`}>
				<div className={styles.text}>
					<h1>Solicite uma avaliação personalizada</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fuga aperiam voluptates possimus quidem saepe fugiat quibusdam eum ut quis.</p>
				</div>
				<div>
					<Button className={styles.button} text={'Lorem ipsum dolor sit amet'} />
				</div>
			</div>
		</section>
	);
}
