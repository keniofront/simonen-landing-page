import styles from './Button.module.css';

const Button = ({ className, text }) => {
  return <button className={`${className} ${styles.button}`}>{text}</button>;
};

export default Button;
