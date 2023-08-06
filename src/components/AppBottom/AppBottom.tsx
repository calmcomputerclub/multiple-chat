import ChatSendForm from "../ChatSendForm";
import styles from "./AppBottom.module.scss";

const AppBottom = () => {
  return (
    <div className={styles.AppBottom}>
      <ChatSendForm />
    </div>
  );
};

export default AppBottom;
