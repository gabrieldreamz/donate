import { ReactNode } from "react";

export default function CenterCard({ children }: { children: ReactNode }) {
  return <section className="max-w-[1440px] mx-auto">{children}</section>;
}
