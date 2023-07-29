"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface AuthRedirectProps {
  children: ReactNode;
}
const AuthRedirect = ({ children }: AuthRedirectProps) => {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, [router]);

  return <>{children}</>;
};

export default AuthRedirect;
