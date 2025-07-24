import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={` ${styles.footer}`}>
			<div className={`container ${styles.container}`}>
				<div className={styles.content}>
					<p>© 2025 MySite. Todos os direitos reservados.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
