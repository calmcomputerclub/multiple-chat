import type { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

interface ButtonProps extends ComponentProps<"button"> {
  onClick: () => void;
  children: ReactNode;
  full?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({ full, children, onClick, loading, disabled, ...props }: ButtonProps) => {
  const _disabled = loading || disabled;
  return (
    <button disabled={_disabled} onClick={onClick} className={cx("Button", { full })} {...props}>
      {loading ? "loading" : children}
    </button>
  );
};

export default Button;
