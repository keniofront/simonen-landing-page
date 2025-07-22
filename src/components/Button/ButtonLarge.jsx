import styles from './Button.module.css';

export default function ButtonLarge({ text }) {
	return <button className={`${styles.button} ${styles.buttonLarge}`}>{text}</button>;
}
