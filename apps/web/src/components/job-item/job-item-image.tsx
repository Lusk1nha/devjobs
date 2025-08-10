import { cn } from "@devjobs/utils/cn";
import { JobItemModel } from "../../model/job-item-model";

interface JobItemImageProps
  extends Pick<JobItemModel, "company" | "logo" | "logoBackground"> {}

export function JobItemImage(props: Readonly<JobItemImageProps>) {
  const { company, logo, logoBackground } = props;

  return (
    <span
      className={cn(
        "flex items-center justify-center w-12.5 h-12.5 rounded-15"
      )}
      style={{ backgroundColor: logoBackground }}
    >
      <img src={logo} alt={company} />
    </span>
  );
}
