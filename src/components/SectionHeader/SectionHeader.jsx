import styles from "./SectionHeader.module.css";

export default function SectionHeader({ className, white, section, title, description }) {
  return (
    <div className={`${styles.headerSecContainer} ${className} ${white ? styles.white : ""}`}>
      <h4>{section}</h4>
      <hr />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
