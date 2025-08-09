"use client";

import { SearchIcon } from "@devjobs/icons/search-icon";

import { ControlledTextInput } from "../../inputs/controlled-text-input/controlled-text-input";

import { Control, FormState, UseFormSetValue } from "react-hook-form";

import { Button } from "@devjobs/ui/button";
import { MobileSearchFiltersDialog } from "../../dialogs/mobile-search-filters-dialog";
import { SearchJobsSchema } from "../../../validators/search-jobs-validator/search-jobs-validator";

interface MobileSearchJobsFiltersFormProps {
  control: Control<SearchJobsSchema>;
  setValue: UseFormSetValue<SearchJobsSchema>;
  formState: FormState<SearchJobsSchema>;
}

export function MobileSearchJobsFiltersForm(
  props: Readonly<MobileSearchJobsFiltersFormProps>
) {
  const { control, setValue, formState } = props;

  return (
    <div className="w-full h-full flex items-center justify-between gap-x-4 px-4">
      <div className="flex items-center">
        <ControlledTextInput
          name="title"
          control={control}
          placeholder="Filter by title..."
          icon={<SearchIcon />}
          disableMobile
        />
      </div>

      <div className="flex items-center gap-x-4">
        <MobileSearchFiltersDialog
          onApply={(filters) => {
            setValue("location", filters.location, {
              shouldDirty: true,
            });
            setValue("fullTime", filters.fullTime, {
              shouldDirty: true,
            });
          }}
        />

        <Button type="submit" disabled={!formState.isDirty}>
          <SearchIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
