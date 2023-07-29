"use client";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import ScreenLoading from "../ScreenLoading";

interface AuthRedirectProps {
  children: ReactNode;
}

const unprotectedRoute = ["/login", "/register"];

const AuthRedirect = ({ children }: AuthRedirectProps) => {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const isUnProtectedRoute = unprotectedRoute.includes(pathname);

  const checkLoginStatus = async () => {
    setLoading(true);
    const result = await new Promise((resolve) => {
      // TODO: replace checking logic
      setTimeout(() => {
        resolve(false);
      }, 1000);
    });
    setLoading(false);
    return result;
  };

  useEffect(() => {
    const check = async () => {
      const res = await checkLoginStatus();
      if (!res) {
        // router.push("/login");
      }
    };
    if (!isUnProtectedRoute) {
      check();
    }
  }, [router, isUnProtectedRoute]);

  if (loading) return <ScreenLoading />;
  if (isLoggedIn) return <>{children}</>;
  return null;
};

export default AuthRedirect;
