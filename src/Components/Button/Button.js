import styles from './Button.module.scss';

const Button = ({ children, action }) => <button className={styles.button} onClick={action}>{children}</button>;

export default Button;