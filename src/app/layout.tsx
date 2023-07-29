import Center from "@/components/Center";
import "./globals.css";
import type { Metadata } from "next";
import AppShell from "@/components/AppShell";
import AuthRedirect from "@/components/AuthRedirect";

export const metadata: Metadata = {
  title: "Multiple",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Center>
          <AppShell>{children}</AppShell>
        </Center>
      </body>
    </html>
  );
}
