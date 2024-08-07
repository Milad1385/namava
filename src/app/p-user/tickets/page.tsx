import Filter from "@/components/modules/Filter/Filter";
import StatBox from "@/components/modules/p-admin/StatBox";
import TicketsList from "@/components/templates/p-user/TicketsList";
import React from "react";
import { FaClosedCaptioning } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { LiaComments } from "react-icons/lia";
import { MdAccessTime } from "react-icons/md";

function page() {
  return (
    <div>
      <Filter
        filterField="status"
        options={[
          { label: "همه", slug: "all" },
          { label: "پاسخ داده شده", slug: "with-asnwers" },
          { label: "پاسخ نداده شده", slug: "without-answers" },
          { label: "بسته شده", slug: "closed" },
        ]}
      />
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white gap-3 md:gap-5 mt-5">
        <StatBox
          icon={<LiaComments className="text-2xl md:text-3xl lg:text-4xl" />}
          title="تعداد کامنت ها"
          color="bg-[#075985]"
          value={29232}
        />
        <StatBox
          icon={
            <HiOutlineBriefcase className="text-2xl md:text-3xl lg:text-4xl" />
          }
          title="پاسخ داده شده"
          color="bg-amber-600"
          value={29232}
        />
        <StatBox
          icon={<MdAccessTime className="text-2xl md:text-3xl lg:text-4xl" />}
          title="در انتظار پاسخ"
          color="bg-[#3730a3]"
          value={29232}
        />
        <StatBox
          icon={
            <FaClosedCaptioning className="text-2xl md:text-3xl lg:text-4xl" />
          }
          title="بسته شده"
          color="bg-red-600"
          value={29232}
        />
      </div>
      <TicketsList />
    </div>
  );
}

export default page;
