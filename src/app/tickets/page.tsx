import clsx from "clsx";
import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
  OPEN: "O",
  DONE: "X",
  IN_PROGRESS: ">",
};

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold trcking-light">Tickets page</h2>
        <p className="text-sm text-muted">All your tickets in one place</p>
      </div>

      <div className="flex-1 flex flex-col items-center gap-y-4">
        {initialTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="w-full max-w-[420px] p-4 border border-slate-100 rounded"
          >
            <div>{TICKET_ICONS[ticket.status]}</div>
            <h3 className="text-lg truncate font-semibold">{ticket.title}</h3>
            <p
              className={clsx("text-sm truncate text-slate-500", {
                "line-through": ticket.status === "DONE",
              })}
            >
              {ticket.content}
            </p>
            <Link className="text-sm underline" href={ticketPath(ticket.id)}>
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
