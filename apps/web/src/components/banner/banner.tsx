import { SemiTriangleIcon } from "@devjobs/icons/semi-triangle-icon";
import { TriangleIcon } from "@devjobs/icons/triangle-icon";
import { VerticalTriangleIcon } from "@devjobs/icons/vertical-triangle-icon";
import { cn } from "@devjobs/utils/cn";

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function Banner(props: Readonly<BannerProps>) {
  const { children, className, ...rest } = props;

  return (
    <div className={cn("w-full h-full relative", className)} {...rest}>
      <div className="absolute text-dashboard-banner-background left-0 bottom-0 md:top-0">
        <TriangleIcon className="w-full h-full" />
      </div>

      <div className="w-full lg:w-auto absolute text-dashboard-banner-background -right-1/3 lg:right-[45%] top-0 md:left-0">
        <SemiTriangleIcon className="w-full" />
      </div>

      <div className="hidden lg:block absolute right-1/12 top-0 text-dashboard-banner-background">
        <VerticalTriangleIcon className="w-full" />
      </div>

      {children}
    </div>
  );
}
