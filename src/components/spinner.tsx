import { LucideLoaderCircle } from "lucide-react";

export function Spinner() {
  return (
    <div className="flex items-center justify-center flex-1 flex-col self-center">
      <LucideLoaderCircle className="h-16 w-16 animate-spin" />
    </div>
  );
}
