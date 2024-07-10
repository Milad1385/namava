import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import Image from "next/image";
import React from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";

function CategoriesList() {
  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>عکس</th>
          <th>عنوان</th>
          <th>لینک</th>
          <th>پرنت</th>
          <th>تگ ها</th>
          <th>تاریخ</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <td>1</td>
            <td className="!p-0 md:!p-5">
              <Image
                src="/images/categories/animation.jpg"
                className="w-32 object-cover h-10 md:h-14 rounded-md mx-auto"
                alt=""
                width={1920}
                height={1080}
              />
            </td>
            <td>علمی تخیلی</td>
            <td>non-fiction</td>
            <td>----</td>
            <td>علمی ، تخیلی ، هیجانی</td>
            <td>1403/04/15</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaPencil className="text-sky-600 text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td className="!p-0 md:!p-5">
              <Image
                src="/images/categories/lovely.jpg"
                className="w-32 object-cover h-10 md:h-14 rounded-md mx-auto"
                alt=""
                width={1920}
                height={1080}
              />
            </td>
            <td>علمی تخیلی</td>
            <td>non-fiction</td>
            <td>----</td>
            <td>علمی ، تخیلی ، هیجانی</td>
            <td>1403/04/15</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaPencil className="text-sky-600 text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td className="!p-0 md:!p-5">
              <Image
                src="/images/categories/iranian.jpg"
                className="w-32 object-cover h-10 md:h-14 rounded-md mx-auto"
                alt=""
                width={1920}
                height={1080}
              />
            </td>
            <td>علمی تخیلی</td>
            <td>non-fiction</td>
            <td>----</td>
            <td>علمی ، تخیلی ، هیجانی</td>
            <td>1403/04/15</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaPencil className="text-sky-600 text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td className="!p-0 md:!p-5">
              <Image
                src="/images/categories/crime.jpg"
                className="w-32 object-cover h-10 md:h-14 rounded-md mx-auto"
                alt=""
                width={1920}
                height={1080}
              />
            </td>
            <td>علمی تخیلی</td>
            <td>non-fiction</td>
            <td>----</td>
            <td>علمی ، تخیلی ، هیجانی</td>
            <td>1403/04/15</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaPencil className="text-sky-600 text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
        </Table.Body>
      </Table>
      <Pagination />
    </div>
  );
}

export default CategoriesList;
