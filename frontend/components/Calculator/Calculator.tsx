import styles from "./Calculator.module.css";

const Calculator = ({ children }) => {
    return (
        <div className={styles.calculator}>{children}</div>
    )
};

export default Calculator;
