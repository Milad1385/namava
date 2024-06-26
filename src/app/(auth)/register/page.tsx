import CompleteInfo from "@/components/templates/auth/register/CompleteInfo";
import SendPhone from "@/components/templates/auth/register/SendPhone";
import VerifyOtp from "@/components/templates/auth/register/VerifyOtp";
import Logo from "@/icons/Logo";
import Link from "next/link";
import React from "react";

export type ResgisterProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

function RegisterPage({ searchParams }: ResgisterProps) {
  return (
    <div className="bg-namavaBlack md:bg-[#121212] flex-center min-h-screen text-white py-10">
      <div className="login-form relative  md:shadow w-[500px]  bg-namavaBlack px-[40px] md:px-[60px] py-[20px] md:py-[30px] rounded-lg">
        <Logo className="fill-namava !w-[96px] !h-[61px] mx-auto" />
        <Link
          href={"/login"}
          className="text-namava absolute left-10 md:left-20 top-10 md:top-12"
        >
          ورود
        </Link>
        {searchParams?.type === "verify" && (
          <>
            <VerifyOtp />
            <div className="flex-center flex-col text-xs md:text-sm text-namava space-y-6 !mt-8">
              <Link href={"?type=forgot"}>شماره را اشتباه وارد کردید ؟</Link>
            </div>
          </>
        )}
        {searchParams?.type === "detail" && <CompleteInfo />}
        {(!searchParams?.type || searchParams?.type === "phone") && (
          <SendPhone />
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({ searchParams }: ResgisterProps) {
  const registerType =
    searchParams?.type === "verify"
      ? "کد یکبار مصرف"
      : searchParams?.type === "detail"
      ? "اطلاعات بیشتر"
      : "شماره همراه";

  return {
    title: `${registerType} را وارد کنید`,
  };
}

export default RegisterPage;
