"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function Sidenav() {
  const pathname = usePathname();
  console.log(pathname, "********8");
  if (pathname == "/") {
    console.log("true there");
  }
  return (
    <>
      <div className="border rounded-md m-5">
        <ul className="flex justify-center space-x-5">
          <li>
            <Link
              href="/"
              className={clsx(
                "flex h-[38px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-sky-100 text-blue-600": pathname === "/",
                }
              )}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href="/sighin"
              className={clsx(
                "flex h-[38px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-sky-100 text-blue-600": pathname === "/sighin",
                }
              )}
            >
              sighin
            </Link>
          </li>
          <li>
            <Link
              href="/sighup"
              className={clsx(
                "flex h-[38px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-sky-100 text-blue-600": pathname === "/sighup",
                }
              )}
            >
              sighup
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidenav;
