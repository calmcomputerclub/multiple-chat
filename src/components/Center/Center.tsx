import styles from "./Center.module.scss";

interface CenterProps {
  children: React.ReactNode;
}

const Center = ({ children }: CenterProps) => {
  return <div className={styles.Center}>{children}</div>;
};

export default Center;
