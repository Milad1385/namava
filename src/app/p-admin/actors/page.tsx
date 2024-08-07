import Search from "@/components/modules/p-admin/Search";
import Title from "@/components/modules/p-admin/Title";
import ActorsList from "@/components/templates/p-admin/actors/ActorsList";
import AddNewActor from "@/components/templates/p-admin/actors/AddNewActor";
import { getAllStars } from "@/src/libs/service/services";
import { TAdminPage } from "@/src/libs/types";
import React from "react";

async function ActorsPage({ searchParams }: TAdminPage) {
  const { stars, counts }: any = await getAllStars(
    +searchParams.page,
    searchParams.q
  );
  return (
    <div>
      <Title name="ایجاد بازیگر" />
      <AddNewActor />
      <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-y-3">
        <Title name="لیست بازیگران و ستارگان" />
        <Search />
      </div>
      <ActorsList stars={JSON.parse(JSON.stringify(stars))} counts={counts} />
    </div>
  );
}

export default ActorsPage;
