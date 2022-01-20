import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
  );
};

export default NavBar;
