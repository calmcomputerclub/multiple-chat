"use client";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import ScreenLoading from "../ScreenLoading";
import useUserStore from "@/stores/user.store";
import useLoading from "@/hooks/useLoading";

interface AuthRedirectProps {
  children: ReactNode;
}

const unprotectedRoute = ["/login", "/register"];

const AuthRedirect = ({ children }: AuthRedirectProps) => {
  const { loading, startLoading, finishLoading } = useLoading();
  const isLogged = useUserStore((state) => state.email);
  const router = useRouter();
  const pathname = usePathname();
  const isUnProtectedRoute = unprotectedRoute.includes(pathname);

  useEffect(() => {
    const checkLoginStatus = async () => {
      startLoading();
      const result = await new Promise((resolve) => {
        setTimeout(() => {
          if (isLogged) {
            resolve(true);
          } else {
            resolve(false);
          }
        }, 600);
      });
      finishLoading();
      return result;
    };

    const check = async () => {
      const res = await checkLoginStatus();
      if (!res) {
        router.push("/login");
      }
    };

    if (!isUnProtectedRoute) {
      check();
    }
  }, [router, isUnProtectedRoute, finishLoading, startLoading, isLogged]);

  if (loading) return <ScreenLoading />;
  if (isLogged) return <>{children}</>;
  return null;
};

export default AuthRedirect;
