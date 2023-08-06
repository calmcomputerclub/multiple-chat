"use client";
import ChatBox from "../ChatBox";
import styles from "./AppBody.module.scss";
import useChatStore from "@/stores/chat.store";

const AppBody = () => {
  const chats = useChatStore((state) => state.chats);
  return (
    <div className={styles.AppBody}>
      {chats.map((c, index) => {
        return <ChatBox key={index} nickName={c.nickName} message={c.message} />;
      })}
    </div>
  );
};

export default AppBody;
