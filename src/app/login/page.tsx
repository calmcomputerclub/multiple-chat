"use client";
import Input from "@/components/Input";
import styles from "./page.module.scss";
import Link from "next/link";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = async () => {
    router.replace("/");
  };
  return (
    <div className={styles.LoginPage}>
      <div className={styles.InputContainer}>
        <div>
          <label className={styles.Label}>
            <span>Email</span>
            <Input bordered placeholder="Email" />
          </label>
        </div>
        <div>
          <label className={styles.Label}>
            <span>Password</span>
            <Input type="password" bordered placeholder="Password" />
          </label>
        </div>
      </div>
      <p className={styles.RegisterText}>
        Not a member? <Link href="/register">Register</Link>
      </p>
      <Button onClick={handleLogin} full>
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
