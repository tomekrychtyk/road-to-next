import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold trcking-light">Home page</h2>
        <p className="text-sm text-muted">Your home place to start</p>
      </div>

      <div className="flex-1 flex  flex-col items-center">
        <Link href={ticketsPath()}>Go to tickets</Link>
      </div>
    </div>
  );
};

export default HomePage;
