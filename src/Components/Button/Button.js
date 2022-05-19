import styles from './Button.module.scss';

const Button = ({ children, action, disabled }) => <button className={styles.button} disabled={disabled} onClick={action}>{children}</button>;

export default Button;