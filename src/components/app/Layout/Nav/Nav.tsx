import React from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
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

        <div className={`flex gap-x-10 items-center ${styles.linkContainer}`}>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
