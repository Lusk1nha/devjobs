import { Navbar } from "../../components/navbar/navbar";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout(
  props: Readonly<IDashboardLayoutProps>
) {
  const { children } = props;

  return (
    <div
      id="dashboard-layout"
      className="bg-dashboard-background w-full h-screen flex flex-col"
    >
      <Navbar />
      {children}
    </div>
  );
}
