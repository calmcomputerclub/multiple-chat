import useUserStore from "@/stores/user.store";
import styles from "./ChatBox.module.scss";
import cn from "classnames/bind";
import dayjs from "dayjs";

const cx = cn.bind(styles);

interface ChatBoxProps {
  nickName: string;
  message: string;
  date?: string | Date;
}

const ChatBox = ({ message, nickName, date }: ChatBoxProps) => {
  const myNick = useUserStore((state) => state.nickName);
  const isMine = nickName === myNick;

  return (
    <div className={cx("ChatBox", { isMine })}>
      <div className={styles.NickName}>{nickName}</div>
      <div className={cx("MessageContainer")}>
        <div className={cx("Message")}>{message}</div>
        <div className={cx("Date")}>{dayjs(date).format("YYYY/MM/DD HH:mm:ss")}</div>
      </div>
    </div>
  );
};

export default ChatBox;
