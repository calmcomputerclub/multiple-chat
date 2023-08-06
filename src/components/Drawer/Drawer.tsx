"use client";

import { useEffect, useState } from "react";
import Backdrop from "../Backdrop";
import styles from "./Drawer.module.scss";
import { useParams, useRouter } from "next/navigation";
import cn from "classnames/bind";

const cx = cn.bind(styles);

const Drawer = () => {
  const [active, setActive] = useState(false);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#settings") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [params]);

  const close = () => {
    router.back();
  };

  return (
    <>
      <Backdrop onClick={close} visible={active} />
      <div className={cx("Drawer", { active })}>
        <div className={cx("DrawerBody")}>
          <h1>Drawer</h1>
        </div>
      </div>
    </>
  );
};

export default Drawer;
