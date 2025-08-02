import "@devjobs/design-system/styles.css";
import "@devjobs/ui/styles.css";
import "./styles.css";

import { Providers } from "../components/providers/providers";

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
