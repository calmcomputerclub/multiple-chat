"use client";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import Button from "../Button";
import Input from "../Input";
import styles from "./AppBottom.module.scss";

const AppBottom = () => {
  return (
    <div className={styles.AppBottom}>
      <div className={styles.SendContainer}>
        <Input placeholder="Write something..." />
        <Button onClick={() => {}}>
          Send
          <PaperPlaneIcon />
        </Button>
      </div>
    </div>
  );
};

export default AppBottom;
