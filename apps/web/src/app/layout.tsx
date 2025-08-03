import type { Metadata } from "next";

import "@devjobs/design-system/styles.css";
import "@devjobs/ui/styles.css";
import "./styles.css";

import { Providers } from "../components/providers/providers";

export const metadata: Metadata = {
  title: "DevJobs",
  description: "Find your next job in tech with DevJobs",
  icons: {
    icon: "/assets/favicon-32x32.png",
    shortcut: "/assets/favicon-32x32.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout(props: Readonly<RootLayoutProps>) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
