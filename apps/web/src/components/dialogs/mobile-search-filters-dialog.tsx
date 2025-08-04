"use client";

import { Control } from "react-hook-form";
import { SearchJobsSchema } from "../../validators/search-jobs-validator/search-jobs-validator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@devjobs/ui/dialog";
import { OpenFilterDialogAction } from "../actions/open-filter-dialog-action";
import { ControlledTextInput } from "../inputs/controlled-text-input/controlled-text-input";
import { ControlledCheckboxInput } from "../inputs/controlled-checkbox-input/controlled-checkbox-input";
import { Button } from "@devjobs/ui/button";

interface MobileSearchFiltersDialogProps {
  control: Control<SearchJobsSchema>;
}

export function MobileSearchFiltersDialog(
  props: Readonly<MobileSearchFiltersDialogProps>
) {
  const { control } = props;

  return (
    <Dialog>
      <DialogTrigger>teste</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-4">
          <ControlledTextInput name="location" control={control} />
          <ControlledCheckboxInput name="fullTime" control={control}>
            Full Time Only
          </ControlledCheckboxInput>
          <Button type="submit">Apply Filters</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
