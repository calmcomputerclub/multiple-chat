"use client";
import { useEffect, useRef } from "react";
import ChatBox from "../ChatBox";
import styles from "./AppBody.module.scss";
import useChatStore from "@/stores/chat.store";
import ChatService from "@/services/chat.service";

const AppBody = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const chats = useChatStore((state) => state.chats);

  useEffect(() => {
    setInterval(() => {
      ChatService.getChats();
    }, 700);
  }, []);

  useEffect(() => {
    // ref.current && ref.current.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <div className={styles.AppBody}>
      {chats.map((c, index) => {
        return <ChatBox key={index} nickName={c.sender} message={c.message} />;
      })}
      <div ref={ref}></div>
    </div>
  );
};

export default AppBody;
