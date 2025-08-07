"use client";

import { Control } from "react-hook-form";
import { SearchJobsSchema } from "../../validators/search-jobs-validator/search-jobs-validator";
import { Dialog, DialogContent, DialogTrigger } from "@devjobs/ui/dialog";

import { ControlledTextInput } from "../inputs/controlled-text-input/controlled-text-input";
import { ControlledCheckboxInput } from "../inputs/controlled-checkbox-input/controlled-checkbox-input";
import { Button } from "@devjobs/ui/button";
import { PinIcon } from "@devjobs/icons/pin-icon";
import { Separator } from "@devjobs/ui/separator";
import { useCallback, useState } from "react";
import { FilterIcon } from "@devjobs/icons/filter-icon";

interface MobileSearchFiltersDialogProps {
  control: Control<SearchJobsSchema>;
}

export function MobileSearchFiltersDialog(
  props: Readonly<MobileSearchFiltersDialogProps>
) {
  const { control } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      setIsOpen(open);
    },
    [setIsOpen, isOpen]
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => setIsOpen(true)}
        >
          <FilterIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <form className="flex flex-col py-6 gap-y-6">
          <div className="flex px-6">
            <ControlledTextInput
              name="location"
              control={control}
              icon={<PinIcon />}
              className="h-6 py-0"
              placeholder="Filter by location…"
            />
          </div>

          <Separator />

          <div className="flex flex-col px-6">
            <ControlledCheckboxInput name="fullTime" control={control}>
              Full Time Only
            </ControlledCheckboxInput>
          </div>

          <div className="w-full flex px-6">
            <Button className="w-full" type="submit">
              Apply Filters
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
