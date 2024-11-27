"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const upsertTicket = async (
  id: string | undefined,
  formData: FormData
) => {
  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };

  await prisma.ticket.upsert({
    where: {
      id: id || "",
    },
    update: {
      title: data.title,
      content: data.content,
    },
    create: {
      title: data.title,
      content: data.content,
    },
  });

  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};
