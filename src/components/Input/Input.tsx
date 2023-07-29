import { ComponentProps } from "react";
import styles from "./Input.module.scss";

interface InputProps extends ComponentProps<"input"> {}

const Input = ({ ...props }: InputProps) => {
  return <input className={styles.Input} {...props} />;
};

export default Input;
