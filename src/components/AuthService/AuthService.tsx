"use client";
import useLoading from "@/hooks/useLoading";
import { app } from "@/lib/firebase-app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./AuthService.module.scss";

const auth = getAuth(app);

interface AuthServiceProps {
  type: "login" | "register";
}

const AuthService = ({ type }: AuthServiceProps) => {
  const { loading, startLoading, finishLoading } = useLoading();
  const [authState, setAuthState] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const register = async () => {
    const { email, password, passwordConfirm } = authState;

    if (password !== passwordConfirm) {
      alert("Password and Password Confirm are not the same.");
    }

    const credential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(credential);
  };

  const login = async () => {
    const credential = await signInWithEmailAndPassword(auth, authState.email, authState.password);
    console.log(credential);
  };

  const handleClick = async () => {
    startLoading();
    const handler = type === "login" ? login : register;
    try {
      await handler();
    } catch (error) {
      console.error(error);
    } finally {
      finishLoading();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setAuthState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(authState);

  return (
    <div className={styles.AuthService}>
      <div className={styles.InputContainer}>
        <div>
          <label className={styles.Label}>
            <span>Email</span>
            <Input type="email" onChange={handleChange} name="email" value={authState.email} bordered placeholder="Email" />
          </label>
        </div>
        <div>
          <label className={styles.Label}>
            <span>Password</span>
            <Input onChange={handleChange} name="password" type="password" bordered placeholder="Password" />
          </label>
        </div>
        {type === "register" && (
          <div>
            <label className={styles.Label}>
              <span>Password Confirm</span>
              <Input onChange={handleChange} name="passwordConfirm" type="password" bordered placeholder="Password Confirm" />
            </label>
          </div>
        )}
      </div>
      <p className={styles.RegisterText}>
        {type === "login" ? (
          <>
            Not a member? <Link href="/register">Register</Link>
          </>
        ) : (
          <>
            Already a member? <Link href="/login">Login</Link>
          </>
        )}
      </p>
      <Button loading={loading} onClick={handleClick} full>
        {type === "login" ? "Login" : "Register"}
      </Button>
    </div>
  );
};

export default AuthService;
