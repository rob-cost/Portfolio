import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      {/* <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src="/header-bg-color.png"
          alt="header"
          width={0}
          height={0}
          className="w-full"
        ></Image>
      </div> */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          {/* <Image
            // src={isDarkMode ? "/logo_dark.png" : "/logo.png"}
            src=""
            alt="Image logo"
            width={232}
            height={20}
            className="w-28 cursor-pointer"
          ></Image> */}
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : " bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <Link href="/#top" className="font-Ovo">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className="font-Ovo">
              About
            </Link>
          </li>
          <li>
            <Link href="/#works" className="font-Ovo">
              My Work
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="font-Ovo">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image
              src={isDarkMode ? "/sun_icon.png" : "/moon_icon.png"}
              alt="moon-icon"
              width={50}
              height={50}
              className="w-6"
            ></Image>
          </button>
          <button className="block md:hidden ml-3">
            <Image
              src={isDarkMode ? "/menu-white.png" : "/menu-black.png"}
              alt="menu"
              width={30}
              height={30}
              className="w-6"
              onClick={openMenu}
            />
          </button>
        </div>

        {/* --- mobile menu --- */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen
         bg-zinc-900 text-cyan-50  transition duration-500 dark:bg-gray-50 dark:text-black"
        >
          <div className="absolute right-6 top-6">
            <Image
              src={isDarkMode ? "/close-black.png" : "/close-white.png"}
              alt="close"
              width={20}
              height={20}
              className="w-5 cursor-pointer"
              onClick={closeMenu}
            />
          </div>
          <li>
            <Link href="/#top" className="font-Ovo" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className="font-Ovo" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#works" className="font-Ovo" onClick={closeMenu}>
              Works
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="font-Ovo" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
