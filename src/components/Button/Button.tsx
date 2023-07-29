"use client";
import type { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.Button}>
      {children}
    </button>
  );
};

export default Button;
