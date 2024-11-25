import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <h2 className="text-lg">{ticket.title}</h2>
          <Link className="text-sm underline" href={ticketPath(ticket.id)}>
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;
