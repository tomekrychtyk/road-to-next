import { initialTickets } from "@/data";
import { Ticket } from "../types";

export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(ticket || null);
  });
};
