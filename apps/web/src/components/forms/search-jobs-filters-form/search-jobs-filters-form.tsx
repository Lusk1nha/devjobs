"use client";

import { MobileSearchJobsFiltersForm } from "./mobile-search-jobs-filter-form";
import { DesktopSearchJobsFiltersForm } from "./desktop-search-jobs-filters-form";

import {
  SearchJobsSchema,
  searchJobsValidator,
} from "../../../validators/search-jobs-validator/search-jobs-validator";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function SearchJobsFiltersForm() {
  const form = useForm<SearchJobsSchema>({
    defaultValues: {
      title: "",
      location: "",
      fullTime: false,
    },
    resolver: zodResolver(searchJobsValidator),
  });

  const { handleSubmit, formState } = form;

  function onSubmit(data: SearchJobsSchema) {
    const {
      success,
      data: parsedData,
      error,
    } = searchJobsValidator.safeParse(data);

    if (!success) {
      console.error("Validation error:", error);
      return;
    }

    console.log("Form submitted successfully:", parsedData);
  }

  return (
    <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="hidden md:flex">
        <DesktopSearchJobsFiltersForm
          control={form.control}
          formState={formState}
        />
      </div>

      <div className="md:hidden flex">
        <MobileSearchJobsFiltersForm
          control={form.control}
          setValue={form.setValue}
          formState={formState}
        />
      </div>
    </form>
  );
}
