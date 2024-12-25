"use client";
import React, { useState } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";
// import LoginForm from "@/components/app/Forms/Auth/LoginForm";
// import SignupForm from "@/components/app/Forms/Auth/SignupForm";
import axios from "axios";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/Forms/AuthForm/LoginForm";
import SignupForm from "@/components/Forms/AuthForm/SignupForm";

interface Props {
  token?: string;
}

const Nav: React.FC<Props> = ({ token }) => {
  console.log(token, "tokenSap");
  const router = useRouter();

  const logoutHandler = async () => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/logout`);
    console.log(res, "RESSS");
    if (res.data?.success) {
      // router.refresh();
    }
  };

  return (
    <>
      <nav className={`${styles.nav}`}>
        <div className="innerContainer flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-x-2 pointer-events-none">
              <Image
                src={"/images/logo-2.png"}
                alt="logo"
                width={100}
                height={100}
                className={styles.logo}
              />

              <h2 className="text-xl font-semibold">𝓠𝓡 𝓖𝓮𝓷𝓮𝓻𝓪𝓽𝓸𝓻</h2>
            </div>
          </Link>

          {!token?.length ? (
            <div
              className={`flex gap-x-10 items-center ${styles.linkContainer}`}
            >
              <Link href={"?auth=login"} className={styles.link}>
                Login
              </Link>
              <Link href={"?auth=signup"} className={styles.link}>
                Sign Up
              </Link>
            </div>
          ) : (
            <div
              className={`flex gap-x-10 items-center ${styles.linkContainer}`}
            >
              <div onClick={logoutHandler} className={styles.link}>
                Logout
              </div>
            </div>
          )}
        </div>
      </nav>

      <LoginForm />
      <SignupForm />
    </>
  );
};

export default Nav;
