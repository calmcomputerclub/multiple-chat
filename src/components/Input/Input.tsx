import type { ComponentProps } from "react";
import styles from "./Input.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

interface InputProps extends ComponentProps<"input"> {
  bordered?: boolean;
}

const Input = ({ bordered, ...props }: InputProps) => {
  return <input className={cx("Input", { bordered })} {...props} />;
};

export default Input;
