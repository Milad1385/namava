import Logo from "@/icons/Logo";
import Link from "next/link";
import React from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { FiFilm, FiYoutube } from "react-icons/fi";
import { GiFilmStrip } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { LuBaby, LuPopcorn } from "react-icons/lu";
import { PiFilmReel } from "react-icons/pi";
import { TbLogin2 } from "react-icons/tb";
import Overlay from "../Overlay/Overlay";

interface MobileNavbar {
  isOpen: boolean;
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNavbar({ isOpen, onOpen }: MobileNavbar) {
  return (
    <>
      <div
        className={`block md:hidden fixed top-0 bottom-0 ${
          isOpen ? "right-0" : "-right-64"
        } w-64 bg-namavaBlack z-50 px-4 py-2 transition-all`}
      >
        <div className="flex items-center justify-between border-b-2 border-b-gray-600">
          <Logo />
          <FaXmark className="text-white" onClick={() => onOpen(false)} />
        </div>
        <div>
          <div className="bg-white flex items-center justify-between p-1 mt-5 rounded-sm">
            <input
              type="text"
              placeholder="جستجو کنید"
              className="bg-none outline-none border-none text-[13px] "
            />
            <button className="bg-namavaBlack text-white p-1 rounded-sm">
              <FaMagnifyingGlass />
            </button>
          </div>
        </div>
        <div className="my-5 border-b-2 border-b-gray-600 pb-5">
          <ul className="text-white space-y-6">
            <li>
              <Link href="" className="flex items-center gap-x-3 text-lg">
                <IoHomeOutline />
                <span className="text-sm">خانه</span>
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-x-3 text-lg">
                <FiFilm />
                <span className="text-sm">فیلم ها</span>
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-x-3 text-lg">
                <FiYoutube />
                <span className="text-sm">سریال ها</span>
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-x-3 text-lg">
                <LuPopcorn />
                <span className="text-sm">تازه ها</span>
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-x-3 text-lg">
                <LuBaby />
                <span className="text-sm">کودکان</span>
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-x-3 text-lg">
                <PiFilmReel />
                <span className="text-sm">پردیس</span>
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-x-3 text-lg">
                <GiFilmStrip />
                <span className="text-sm">نماوا مگ</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white space-y-6">
            <li>
              <Link href={""} className="flex items-center gap-x-2 text-2xl">
                <TbLogin2 />
                <span className="text-sm">ورود | ثبت نام</span>
              </Link>
            </li>
            <li>
              <Link href={""} className="flex items-center gap-x-2 text-2xl">
                <CiShoppingBasket />
                <span className="text-sm">خرید اشتراک</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Overlay isOpen={isOpen} onClose={onOpen} />
    </>
  );
}

export default MobileNavbar;
