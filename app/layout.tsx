import Link from "next/link";
import "@picocss/pico/css/pico.min.css";
import "./globals.css";
import React from "react";

export const metadata = {
  title: '...',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />

      <body>
        <div className={"flashing-border"}>
          <small className={"layout-label"}>root layout</small>

          <nav>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/posts"}>Posts</Link>
              </li>
              <li>
                <Link href={"/users/list"}>Users</Link>
              </li>
              <li>
                <Link href={"/users/static"}>Users Static</Link>
              </li>
            </ul>
          </nav>

          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
