"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(prevState: any, formData: FormData) {
  try {
    const adminPage = process.env.ADMIN_PAGE || "/l8I32auyIM";
    await signIn("credentials", formData, { redirectTo: adminPage });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid username or password.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
