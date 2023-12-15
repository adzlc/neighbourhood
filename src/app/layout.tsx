import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Neighbourhoods",
  description: "Application for managing your Sims Neighbourhoods.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


const simssans = localFont({
  src: [
    {
      path: '../../public/fonts/Sims-Sans.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Sims-Sans-SC.ttf',
      weight: '700'
    }
  ],
  variable: '--font-simssans'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${simssans.variable} :root` }>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
