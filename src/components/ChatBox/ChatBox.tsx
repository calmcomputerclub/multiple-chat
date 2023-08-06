import styles from "./ChatBox.module.scss";

interface ChatBoxProps {
  nickName: string;
  message: string;
}

const ChatBox = ({ message, nickName }: ChatBoxProps) => {
  return (
    <div className={styles.ChatBox}>
      <div className={styles.NickName}>{nickName}</div>
      <div>{message}</div>
    </div>
  );
};

export default ChatBox;
