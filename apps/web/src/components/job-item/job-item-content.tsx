import { Typography } from "@devjobs/ui/typography";
import { JobItemModel } from "../../model/job-item-model";
import Link from "next/link";

interface JobItemContentProps {
  content: JobItemModel;
}

export function JobItemContent({ content }: Readonly<JobItemContentProps>) {
  const { id, position, postedAt, contract, company, location } = content;

  return (
    <section className="w-full h-full flex flex-col justify-between gap-y-2">
      <div className="flex flex-col gap-y-2">
        <Typography
          variant="p"
          className="flex gap-x-3 items-center text-job-item-content"
        >
          <span>{postedAt}</span>
          <span className="w-1 h-1 rounded-full items-center justify-center bg-job-item-content" />
          <span>{contract}</span>
        </Typography>

        <Link className="text-job-item-link hover:text-job-item-link-hover active:text-job-item-link-hover" href={`position/${id}`} prefetch>
          <Typography variant="h3">{position}</Typography>
        </Link>

        <Typography variant="p" className="text-job-item-content">
          <span>{company}</span>
        </Typography>
      </div>

      <div>
        <Typography variant="h5" className="text-job-item-content-location">
          <span>{location}</span>
        </Typography>
      </div>
    </section>
  );
}
