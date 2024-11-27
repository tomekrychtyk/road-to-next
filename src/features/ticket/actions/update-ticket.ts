"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const updateTicket = async (ticketId: string, formData: FormData) => {
  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };

  await prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      title: data.title,
      content: data.content,
    },
  });

  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};
