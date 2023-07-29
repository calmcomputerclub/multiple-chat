import type { ReactNode } from "react";
import styles from "./AppShell.module.scss";

interface AppShellProps {
  children: ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  return <div className={styles.AppShell}>{children}</div>;
};

export default AppShell;
