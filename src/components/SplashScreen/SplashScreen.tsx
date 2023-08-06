"use client";
import { useEffect, useState } from "react";
/* eslint-disable @next/next/no-img-element */
import styles from "./SplashScreen.module.scss";

interface SplashScreenProps {
  children: React.ReactNode;
}

const SplashScreen = ({ children }: SplashScreenProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const end = async () => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 2400);
      });
      setLoading(false);
    };
    end();
  }, []);

  if (!loading) return <>{children}</>;
  return (
    <div className={styles.SplashScreen}>
      <img src="/wow.gif" alt="" />
    </div>
  );
};

export default SplashScreen;
