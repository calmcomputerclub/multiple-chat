"use client";
import { useLoadingValue } from "@/hooks/useLoading";
import styles from "./GlobaLoader.module.scss";

const GlobaLoader = () => {
  const loading = useLoadingValue();
  if (!loading) return null;
  return <div className={styles.GlobaLoader}>Loading...</div>;
};

export default GlobaLoader;
