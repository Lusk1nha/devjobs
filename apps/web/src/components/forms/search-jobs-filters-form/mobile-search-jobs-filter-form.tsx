"use client";

import { SearchIcon } from "@devjobs/icons/search-icon";

import { ControlledTextInput } from "../../inputs/controlled-text-input/controlled-text-input";
import { Control } from "react-hook-form";
import { SearchJobsSchema } from "../../../validators/search-jobs-validator/search-jobs-validator";

import { Button } from "@devjobs/ui/button";
import { MobileSearchFiltersDialog } from "../../dialogs/mobile-search-filters-dialog";

interface MobileSearchJobsFiltersFormProps {
  control: Control<SearchJobsSchema>;
}

export function MobileSearchJobsFiltersForm(
  props: Readonly<MobileSearchJobsFiltersFormProps>
) {
  const { control } = props;

  return (
    <div className="w-full h-full flex items-center justify-between gap-x-4 px-4">
      <div className="flex items-center">
        <ControlledTextInput
          name="title"
          control={control}
          placeholder="Filter by title..."
          icon={<SearchIcon />}
        />
      </div>

      <div className="flex items-center gap-x-4">
        <MobileSearchFiltersDialog control={control} />

        <Button type="submit">
          <SearchIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
