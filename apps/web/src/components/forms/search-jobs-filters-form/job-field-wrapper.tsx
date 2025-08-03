import { cn } from "@devjobs/utils/cn";

interface JobFieldWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function JobFieldWrapper(props: Readonly<JobFieldWrapperProps>) {
  const { children, className } = props;

  return (
    <fieldset
      className={cn(
        "flex-1 border-r border-search-filters-separator/20 first-of-type:pl-0 px-6 last-of-type:border-r-0 last-of-type:pr-0",
        className
      )}
    >
      {children}
    </fieldset>
  );
}
