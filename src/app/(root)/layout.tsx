import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col justify-between min-h-svh">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
