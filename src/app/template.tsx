import { RedirectToast } from "@/components/redirect-toast";

interface TemplateProps {
  children: React.ReactNode;
}

export default function RootTemplate({ children }: Readonly<TemplateProps>) {
  return (
    <>
      <>{children}</>
      <RedirectToast />
    </>
  );
}
