import { LucideLoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center flex-1 flex-col self-center">
      <LucideLoaderCircle className="h-16 w-16 animate-spin" />
    </div>
  );
}
