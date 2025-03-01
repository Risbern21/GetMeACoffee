"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [sd1, setsd1] = useState(false);
  const [sd2, setsd2] = useState(false);
  return (
    <nav className="bg-[#1D1E23] sticky top-0 flex justify-between px-4 w-full items-center py-3 xl:py-6 z-30">
      <div className="logo font-extrabold text-xl">
        GetMeA<span className="text-[#e29e4a]">Coffee!</span>
      </div>
      <div className="sm:hidden">
        {!session ? (
          <Link href={"/login"}>
            <button
              type="button"
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 hover:font-bold focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Login
            </button>
          </Link>
        ) : (
          <div>
            <button
              id="dropdownDividerButton"
              data-dropdown-toggle="dropdownDivider"
              className="text-white px-5 py-2.5 text-center inline-flex items-center relative"
              type="button"
              onClick={() => setsd1(!sd1)}
              onBlur={() => {
                setTimeout(() => {
                  setsd1(false);
                }, 50);
              }}
            >
              <img src="/coffee.svg" alt="" />
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdownDivider"
              className={`z-30 ${
                sd1 ? "" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-15 right-6 z-30`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDividerButton"
              >
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/profile"}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <button>Profile</button>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${session.user.email.split("@")[0]}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <button>Your Page</button>
                  </Link>
                </li>
                <hr className="border-[1px]" />
                <li>
                  {session && (
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => signOut()}
                    >
                      Logout
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <ul className=" gap-3 justify-between items-center hidden sm:flex text-[#9fa0a2]">
        <li className="hover:text-[white] hover:font-bold">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-[white] hover:font-bold">
          <Link href={"/projects"}>Projects</Link>
        </li>
        {session && (
          <div className="relative">
            <button
              id="dropdownDividerButton"
              data-dropdown-toggle="dropdownDivider"
              className=" rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium me-2 mb-2"
              type="button"
              onClick={() => setsd2(!sd2)}
              onBlur={() => {
                setTimeout(() => {
                  setsd2(false);
                }, 50);
              }}
            >
              Navigate
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdownDivider"
              className={`z-10 ${
                sd2 ? "" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-14 right-0 z-20`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200 "
                aria-labelledby="dropdownDividerButton"
              >
                <li>
                  <button
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
                    onClick={() => {
                      router.push("/profile");
                    }}
                  >
                    Profile
                  </button>
                </li>
                <li>
                    <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left" onClick={() => {
                      router.push(`/${session.user.email.split("@")[0]}`);
                    }}>
                      Your Page
                    </button>
                </li>
              </ul>
            </div>
          </div>
        )}
        {session ? (
          <div className="flex gap-2 items-center">
            <Link href="#">
              <button
                type="button"
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 hover:font-bold focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <Link href={"/login"}>
            <button
              type="button"
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 hover:font-bold focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Login
            </button>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
