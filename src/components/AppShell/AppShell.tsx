import type { ReactNode } from "react";
import styles from "./AppShell.module.scss";
import GlobaLoader from "../GlobaLoader";

interface AppShellProps {
  children: ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className={styles.AppShell}>
      <GlobaLoader />
      {children}
    </div>
  );
};

export default AppShell;
