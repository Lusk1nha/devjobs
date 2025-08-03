import { Kumbh_Sans } from "next/font/google";

const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  preload: true,
  variable: "--font-kumbh",
});

interface RootTemplateProps {
  children: React.ReactNode;
}

export default function RootTemplate(props: Readonly<RootTemplateProps>) {
  const { children } = props;

  return (
    <div id="root-template-container" className={`${kumbh.className}`}>
      {children}
    </div>
  );
}
