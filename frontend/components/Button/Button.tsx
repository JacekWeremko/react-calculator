import styles from  "./Button.module.css";

const Button = ({value, onClick }) => {
    return (
        <button className={value === "=" ? styles.equals : styles.button} onClick={onClick}>
            {value}
        </button>
    );
};

export default Button;