"use client";

import { JobItemModel } from "../../model/job-item-model";
import { JobItemContent } from "./job-item-content";
import { JobItemImage } from "./job-item-image";

interface JobItemProps {
  item: JobItemModel;
}

export function JobItem(props: Readonly<JobItemProps>) {
  const { item } = props;

  return (
    <li className="bg-job-item-background w-full max-w-w-job-item md:max-w-w-job-item-md lg:max-w-w-job-item-lg h-h-job-item rounded-6 relative pt-12.5 pb-9 px-9">
      <div className="absolute -top-[10%] left-1/12">
        <JobItemImage
          company={item.company}
          logo={item.logo}
          logoBackground={item.logoBackground}
        />
      </div>

      <JobItemContent content={item} />
    </li>
  );
}
