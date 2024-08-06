"use server";
import connectToDB from "@/src/configs/db";
import ContactModel from "@/src/models/contactus";
import { ContactUs, TContactUs } from "@/src/validators/frontend";
import { isValidObjectId } from "mongoose";
import { revalidatePath } from "next/cache";

export const sendNewContact = async (body: TContactUs) => {
  try {
    connectToDB();
    const { name, phone, message, department, email } = body;

    const validateFields = ContactUs.safeParse(body);
    if (!validateFields.success) {
      return {
        message: "تمام فیلد های خواسته شده را وارد کنید",
        status: 422,
      };
    }

    await ContactModel.create({
      name,
      phone,
      message,
      department,
      email,
    });

    revalidatePath("/p-admin/contactus");

    return {
      message: "پیغام شما با موفقیت ارسال شد",
      status: 201,
    };
  } catch (error) {
    console.log(error);

    return {
      message: "لطفا اتصال اینترنت خود را بررسی کنید",
      status: 500,
    };
  }
};

export const deleteContact = async (id: string) => {
  try {
    connectToDB();
    if (!isValidObjectId(id)) {
      return {
        message: "ایدی مورد نظر نامعتبر است",
        status: 422,
      };
    }

    const contact = await ContactModel.findOne({ _id: id });

    if (!contact) {
      return {
        message: "این پیغام برای حذف کردن یافت نشد",
        status: 404,
      };
    }

    await ContactModel.findByIdAndDelete(`${id}`);

    revalidatePath("/p-admin/contacts");

    return {
      message: "پیغام با موفقیت حذف شد",
      status: 200,
    };
  } catch (error) {
    return {
      message: "لطفا اتصال اینترنت خود را بررسی کنید",
      status: 500,
    };
  }
};
