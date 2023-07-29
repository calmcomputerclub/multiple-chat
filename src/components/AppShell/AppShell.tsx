import AppBody from "../AppBody";
import AppBottom from "../AppBottom";
import Appbar from "../Appbar";
import styles from "./AppShell.module.scss";

const AppShell = () => {
  return (
    <div className={styles.AppShell}>
      <Appbar />
      <AppBody />
      <AppBottom />
    </div>
  );
};

export default AppShell;
