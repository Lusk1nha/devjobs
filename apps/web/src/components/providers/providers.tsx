import { ThemeProvider } from "../../providers/theme-provider/theme-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers(props: ProvidersProps) {
  const { children } = props;

  return (
    <ThemeProvider storageKey="theme" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
