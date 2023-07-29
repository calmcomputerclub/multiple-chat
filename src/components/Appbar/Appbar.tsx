"use client";
import { GearIcon } from "@radix-ui/react-icons";
import styles from "./Appbar.module.scss";
import { useRouter } from "next/navigation";

const Appbar = () => {
  const router = useRouter();
  return (
    <div className={styles.Appbar}>
      <h1 className={styles.User}>tinnyard</h1>
      <button
        onClick={() => {
          router.push("#settings");
        }}
        className={styles.Setting}
      >
        <GearIcon width={24} height={24} />
      </button>
    </div>
  );
};

export default Appbar;
