import React, { useState } from "react";
import Image from "next/image";
import NavItem from "./NavItem";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// flex justify-between items-center gap-7 text-white p-2

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="z-50 px-6 h-16 flex justify-between items-center bg-gray-800 fixed top-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-30">
        <Link className="relative h-10 w-10" href="/">
          <Image
            priority={true}
            alt=""
            fill={true}
            style={{ objectFit: "contain" }}
            src={"/Images/logo.png"}
          />
        </Link>

        <ul>
        <NavItem title={"Resume"} href="/resume.pdf" newTab={true} />
        </ul>
      </nav>
      {/* <nav className="px-6 h-16 md:flex justify-between items-center bg-dark-gray sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="flex items-center justify-between h-16">
          <Link className="relative h-10 w-10" href="/">
            <Image
              priority={true}
              alt=""
              fill={true}
              style={{ objectFit: "contain" }}
              src={"/Images/logo.png"}
            />
          </Link>
          {showNav ? (
            <AiOutlineClose
              onClick={() => setShowNav(!showNav)}
              className="md:hidden block w-10 h-10 p-2 cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setShowNav(!showNav)}
              className="md:hidden block w-10 h-10 p-2 cursor-pointer"
            />
          )}
        </div>

        <ul
          className={
            (showNav ? "visible" : "hidden") +
            " right-8 md:static fixed top-16 md:flex md:gap-7 items-center text-white bg-dark-gray md:bg-transparent rounded-lg py-3 px-2"
          }
        >
          <NavItem title={"Resume"} href="/resume.pdf" newTab={true} />
        </ul>
      </nav> */}
    </>
  );
}
