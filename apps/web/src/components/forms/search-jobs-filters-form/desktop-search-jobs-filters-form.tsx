"use client";

import { SearchIcon } from "@devjobs/icons/search-icon";

import { ControlledTextInput } from "../../inputs/controlled-text-input/controlled-text-input";

import { JobFieldWrapper } from "./job-field-wrapper";
import { PinIcon } from "@devjobs/icons/pin-icon";
import { Control, FormState } from "react-hook-form";

import { Button } from "@devjobs/ui/button";

import { ControlledCheckboxInput } from "../../inputs/controlled-checkbox-input/controlled-checkbox-input";
import { SearchJobsSchema } from "../../../validators/search-jobs-validator/search-jobs-validator";

interface DesktopSearchJobsFiltersFormProps {
  control: Control<SearchJobsSchema>;
  formState: FormState<SearchJobsSchema>;
}

export function DesktopSearchJobsFiltersForm(
  props: Readonly<DesktopSearchJobsFiltersFormProps>
) {
  const { control, formState } = props;

  return (
    <div className="w-full h-full flex items-center justify-between gap-x-4 px-4 lg:px-7.5">
      <div className="w-full flex items-center">
        <JobFieldWrapper>
          <ControlledTextInput
            name="title"
            control={control}
            placeholder="Filter by title..."
            icon={<SearchIcon />}
          />
        </JobFieldWrapper>

        <JobFieldWrapper>
          <ControlledTextInput
            name="location"
            control={control}
            placeholder="Filter by location..."
            icon={<PinIcon />}
          />
        </JobFieldWrapper>

        <JobFieldWrapper>
          <ControlledCheckboxInput name="fullTime" control={control}>
            Full Time Only
          </ControlledCheckboxInput>
        </JobFieldWrapper>
      </div>

      <div className="flex items-center gap-x-4">
        <Button type="submit" className="lg:px-8" disabled={!formState.isDirty}>
          Search
        </Button>
      </div>
    </div>
  );
}
