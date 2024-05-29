"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../icons/Logo";
import Search from "../../../icons/Search";
import Link from "next/link";
import Image from "next/image";
import { HiMiniBars3 } from "react-icons/hi2";
import MobileNavbar from "./MobileNavbar";
import { usePathname, useRouter } from "next/navigation";
import KidLogo from "@/icons/KidLogo";
import Button from "../auth/Button/Button";

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  let navBar = useRef<any>("");

  const isKid = pathname.includes("/kids");

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    let lastScroll = 0;
    const scrollHandler = () => {
      let newScroll = document.documentElement.scrollTop;

      if (navBar.current !== "") {
        if (newScroll === 0) {
          navBar.current.style.backgroundColor = "transparent";
          navBar.current.position = "fixed";
          navBar.current.style.boxShadow = "none";
        } else if (newScroll > lastScroll) {
          navBar.current.style.top = "-80px";
          navBar.current.style.backgroundColor = "#121212";
          navBar.current.position = "fixed";
          navBar.current.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.3)";
        } else {
          navBar.current.style.top = "0px";
          navBar.current.position = "sticky";
          navBar.current.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.3)";
        }
      }
      lastScroll = newScroll;
    };
    document.addEventListener("scroll", scrollHandler);

    return () => document.removeEventListener("scroll", scrollHandler);
  }, []);

  if (
    pathname.includes("/login") ||
    pathname.includes("/register") ||
    pathname.includes("/forgot") ||
    pathname.includes("/profile-list") ||
    pathname.includes("/add-profile") ||
    pathname.includes("/pin-lock")
  ) {
    return null;
  }

  return (
    <>
      <div
        ref={navBar}
        className={`fixed ${
          isKid ? "text-black" : "navbar-container text-white"
        } top-0  z-40  right-0  transition-all duration-500 left-0 py-2 px-[20px] lg:px-[43px] flex items-center justify-between`}
      >
        <div className="flex items-center md:gap-x-5 lg:gap-x-8">
          <div className="flex items-center gap-x-2">
            {!isKid && (
              <HiMiniBars3
                className="text-2xl block md:hidden"
                onClick={() => setIsOpen(true)}
              />
            )}
            <Link  href={isKid ? "/kids" : "/"}>{isKid ? <KidLogo /> : <Logo />}</Link>
          </div>
          <ul className="hidden md:flex child:block items-center md:gap-x-5 lg:gap-x-8 text-xs hover:child:text-namava">
            {!isKid ? (
              <>
                <li>
                  <Link href={"/"} className="active">
                    خانه
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>فیلم ها</Link>
                </li>
                <li>
                  <Link href={"/"}>سریال ها</Link>
                </li>
                <li>
                  <Link href={"/category"}>دسته بندی</Link>
                </li>
                <li>
                  <Link href={"/category"}>دسته بندی</Link>
                </li>
                <li>
                  <Link href={"/"}>کودکان</Link>
                </li>
                <li>
                  <Link href={"/"}>پردیس نماوا</Link>
                </li>
                <li>
                  <Link href={"/"}>نماوا مگ</Link>
                </li>
              </>
            ) : (
              <>
                <li className="text-sm">
                  <Link href={"/"}>خانه</Link>
                </li>
                <li className="text-sm">
                  <Link href={"/"}>لیست من</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-x-5">
          {isKid && (
            <Button className="w-[120px] text-xs text-white !font-Iran">
              تنظیمات کودک
            </Button>
          )}
          <Link href={isKid ? "/kids/search" : "/search"}>
            <Search />
          </Link>
          <Link href={""}>
            <Image
              src={"/images/user.png"}
              alt="user.png"
              width={40}
              height={40}
              className="rounded-full w-[30px] h-[30px] lg:w-10 lg:h-10 shrink-0"
            />
          </Link>
          {!isKid && (
            <Link
              href={"/login"}
              className={`bg-transparent  ${
                isKid ? "" : "border border-white"
              }  rounded-xl text-xs py-2.5 px-2`}
            >
              ورود | ثبت نام
            </Link>
          )}
        </div>
      </div>
      {/* mobile menu */}
      {!isKid && <MobileNavbar isOpen={isOpen} onOpen={setIsOpen} />}
    </>
  );
}

export default Navbar;
