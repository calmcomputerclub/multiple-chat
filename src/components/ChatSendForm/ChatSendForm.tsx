"use client";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import Button from "../Button";
import Input from "../Input";
import styles from "./ChatSendForm.module.scss";
import { useState } from "react";
import useUserStore from "@/stores/user.store";
import { Chat } from "@/types";
import ChatService from "@/services/chat.service";

const ChatSendForm = () => {
  const [message, setMessage] = useState("");
  const nickName = useUserStore((state) => state.nickName);

  const handleSend = async () => {
    if (!message) return;
    const chat: Chat = {
      date: new Date().toString(),
      message,
      nickName,
    };
    await ChatService.addChat(chat);
    setMessage("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSend();
      }}
      className={styles.ChatSendForm}
    >
      <div className={styles.SendContainer}>
        <Input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Write something..."
        />
        <Button type="submit" onClick={handleSend}>
          Send
          <PaperPlaneIcon />
        </Button>
      </div>
    </form>
  );
};

export default ChatSendForm;
