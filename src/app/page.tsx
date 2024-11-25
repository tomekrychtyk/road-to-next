import Link from "next/link";
import { Heading } from "@/components/heading";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Home" description="Your home place to start" />

      <div className="flex-1 flex  flex-col items-center">
        <Link href={ticketsPath()}>Go to tickets</Link>
      </div>
    </div>
  );
};

export default HomePage;
