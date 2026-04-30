"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteMessage(id: string) {
  try {
    await prisma.contactMessage.delete({
      where: { id },
    });
    
    // Revalidate the admin page so the UI updates immediately
    const adminPath = process.env.ADMIN_PAGE || "/admin";
    revalidatePath(adminPath);
    
    return { success: true };
  } catch (error) {
    console.error("Failed to delete message:", error);
    return { success: false, error: "Failed to delete message" };
  }
}
