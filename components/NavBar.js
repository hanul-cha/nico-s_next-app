import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import style from "./NavBar.module.css"

const NavBar = () => {
  const router = useRouter();

  return (
    <div>
      <Link href="/">
        <a className={`${style.link}  ${router.pathname === "/" ? style.active : ""}`}>home</a>
      </Link>
      <Link href="/about">
        <a className={[style.link, router.pathname === "/about" ? style.active : ""].join(" ")}>about</a>
      </Link>
    </div>
  );
};

export default NavBar;
