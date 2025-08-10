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
      className="bg-dashboard-background w-full min-h-screen flex flex-col pb-6"
    >
      <Navbar />
      {children}
    </div>
  );
}
