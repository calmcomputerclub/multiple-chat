import AuthService from "@/components/AuthService";
import styles from "./page.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.LoginPage}>
      <AuthService type="login" />
    </div>
  );
};

export default LoginPage;
