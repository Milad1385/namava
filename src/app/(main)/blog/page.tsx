import ArticleSlider from "@/components/templates/article/ArticleSlider";
import MainSlider from "@/components/templates/article/MainSlider";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";

function page() {
  return (
    <div className="max-w-[1200px] container mx-auto  my-24">
      <MainSlider />
      <div className="mt-10">
        <div className="text-white flex items-center justify-between mb-6">
          <p className="text-base md:text-lg font-IranMedium">آخرین مطالب</p>
          <Link href={""} className="flex items-center gap-x-2 hover:bg-namava hover:text-white px-3 py-1.5 rounded-md transition-all">
            مشاهده بیشتر
            <FaChevronLeft />
          </Link>
        </div>
        <ArticleSlider />
      </div>
      <div className="mt-10">
        <div className="text-white flex items-center justify-between mb-6">
          <p className="text-base md:text-lg font-IranMedium">مطالب پر مخاطب</p>
          <Link href={""} className="flex items-center gap-x-2 hover:bg-namava hover:text-white px-3 py-1.5 rounded-md transition-all">
            مشاهده بیشتر
            <FaChevronLeft />
          </Link>
        </div>
        <ArticleSlider />
      </div>
    </div>
  );
}

export default page;
