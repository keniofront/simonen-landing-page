import styles from "./SectionHeader.module.css";

export default function SectionHeader({ section, title, description, white, center, hideLine }) {
  return (
    <div className={`${white ? styles.white : ""} ${center ? styles.center : ""} ${styles.content}`}>
      <h4>{section}</h4>
      <hr className={`${hideLine ? styles.hideLine : ""}`} />
      <h2>{title}</h2>
      {description}
    </div>
  );
}
