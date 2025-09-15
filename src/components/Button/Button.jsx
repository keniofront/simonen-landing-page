import styles from "./Button.module.css";

const Button = ({ className, onClick, text }) => {
  return (
    <button className={`${className} ${styles.button}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
