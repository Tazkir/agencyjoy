import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/Header/Header";
import { manrope, robotoMono, satoshi } from "@/components/Fonts/fonts";

export const metadata: Metadata = {
  title: "Agencyjoy - AI Agency",
  description: "Innovative Agency Beyond ✦ Limits. Amplified With AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased scroll-smooth",
          manrope.variable,
          robotoMono.variable,
          satoshi.variable
        )}
      >
        <main className="relative flex flex-col">
          <NavBar />
          <section className="flex-grow flex-1">{children}</section>
        </main>
      </body>
    </html>
  );
}
