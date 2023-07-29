import type { ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  full?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({ full, children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={cx("Button", { full })}>
      {children}
    </button>
  );
};

export default Button;
