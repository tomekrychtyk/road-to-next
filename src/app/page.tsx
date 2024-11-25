import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-6xl">Home page</h2>

      <Link href={ticketsPath()}>View all tickets</Link>
    </div>
  );
};

export default HomePage;
