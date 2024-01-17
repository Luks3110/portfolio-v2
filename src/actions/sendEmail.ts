"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

import React from "react";
import ContactFormEmail from "@/components/contact-form-email";
import { validateEmail, validateMessage } from "@/lib/utils/validations";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateEmail(senderEmail)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateMessage(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "lucas_haya@hotmail.com",
      subject: "Message portfolio contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });

    return { data, error };
  } catch (error: unknown) {
    console.log("🚀 ~ sendEmail ~ error:", error);
    return {
      error: "Something went wrong",
    };
  }
};
