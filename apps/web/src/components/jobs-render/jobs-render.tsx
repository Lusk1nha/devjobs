"use client";

import { JobItemModel } from "../../model/job-item-model";
import { JobItem } from "../job-item/job-item";

interface JobsRenderProps {
  jobs: JobItemModel[];
}

export function JobsRender(props: Readonly<JobsRenderProps>) {
  const { jobs } = props;

  return (
    <ul className="w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-3 gap-y-12">
      {jobs.map((job) => (
        <JobItem key={job.id} item={job} />
      ))}
    </ul>
  );
}
