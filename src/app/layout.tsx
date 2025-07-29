import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Marvel Cinematic Universe Tracker",
  description: "Track your favorite Marvel movies and shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 


{
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
