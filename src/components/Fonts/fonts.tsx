import localFont from "next/font/local";

export const manrope = localFont({
  src: "../../app/fonts/Manrope-Variable.woff2",
  variable: "--font-manrope",
});
export const robotoMono = localFont({
  src: "../../app/fonts/Roboto-Mono-regular.woff",
  variable: "--font-roboto-mono",
});
export const satoshi = localFont({
  src: "../../app/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "100 900",
});
