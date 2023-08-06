"use client";
import { GearIcon } from "@radix-ui/react-icons";
import styles from "./Appbar.module.scss";
import { useRouter } from "next/navigation";
import useUserStore from "@/stores/user.store";
import { useEffect } from "react";
import UserService from "@/services/user.service";

const Appbar = () => {
  const randName = useUserStore((state) => state.nickName);
  const router = useRouter();

  useEffect(() => {
    if (!randName) {
      UserService.createNickName();
    }
  }, [randName]);

  const isLoading = !randName;

  return (
    <div className={styles.Appbar}>
      <h1 className={styles.User}>{isLoading ? "Cooking..." : `Nickname: ${randName}`}</h1>
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
