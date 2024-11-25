import { Separator } from "@/components/ui/separator";

type HeadingProps = {
  title: string;
  description?: string;
};

export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold trcking-light">{title}</h2>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      <Separator />
    </>
  );
};
