import React, { useRef } from "react";
import Image from "next/image";

const Navbar = () => {
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src="/header-bg-color.png"
          alt="header"
          width={0}
          height={0}
          className="w-full"
        ></Image>
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#top">
          <Image
            src="/logo.png"
            alt="Image logo"
            width={232}
            height={20}
            className="w-28 cursor-pointer"
          ></Image>
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About
            </a>
          </li>
          <li>
            <a href="#works" className="font-Ovo">
              Works
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image
              src="/moon_icon.png"
              alt="moon-icon"
              width={50}
              height={50}
              className="w-6"
            ></Image>
          </button>
          <button className="block md:hidden ml-3">
            <Image
              src="/menu-black.png"
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
         bg-slate-400 transition duration-500"
        >
          <div className="absolute right-6 top-6">
            <Image
              src="/close-black.png"
              alt="close"
              width={20}
              height={20}
              className="w-5 cursor-pointer"
              onClick={closeMenu}
            />
          </div>
          <li>
            <a href="#top" className="font-Ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#works" className="font-Ovo" onClick={closeMenu}>
              Works
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
