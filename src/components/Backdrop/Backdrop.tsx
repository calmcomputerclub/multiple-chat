"use client";
import styles from "./Backdrop.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

interface BackdropProps {
  visible: boolean;
  onClick?: () => void;
}

const Backdrop = ({ visible, onClick }: BackdropProps) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return <div onClick={handleClick} className={cx("Backdrop", { visible })} />;
};

export default Backdrop;
