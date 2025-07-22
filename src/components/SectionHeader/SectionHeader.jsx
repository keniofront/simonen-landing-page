import styles from './SectionHeader.module.css';

function SectionHeader({ section, title, description, align = 'left', hideLine }) {
	return (
		<div className={`${styles.SectionHeader} ${styles[align]} ${styles.mobile}`}>
			<div>
				<h4>{section}</h4>
				<hr className={` ${hideLine ? styles.hideLine : ''}`} />
			</div>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
}
export default SectionHeader;
