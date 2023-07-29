import AppBody from "../AppBody";
import AppBottom from "../AppBottom";
import Appbar from "../Appbar";
import Drawer from "../Drawer";
import styles from "./AppShell.module.scss";

const AppShell = () => {
  return (
    <div className={styles.AppShell}>
      <Appbar />
      <AppBody />
      <AppBottom />
      <Drawer />
    </div>
  );
};

export default AppShell;
