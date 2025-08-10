"use client";

import { SearchJobsSchema } from "../../validators/search-jobs-validator/search-jobs-validator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogVisuallyHidden,
} from "@devjobs/ui/dialog";

import { Button } from "@devjobs/ui/button";
import { PinIcon } from "@devjobs/icons/pin-icon";
import { Separator } from "@devjobs/ui/separator";
import { useCallback, useState } from "react";
import { FilterIcon } from "@devjobs/icons/filter-icon";
import { TextInputMounted } from "../inputs/text-input-mounted";
import { CheckboxInput } from "@devjobs/ui/checkbox-input";

type SearchJobSchemaWithoutTitle = Omit<SearchJobsSchema, "title">;

interface MobileSearchFiltersDialogProps {
  onApply: (filters: SearchJobSchemaWithoutTitle) => void;
  defaultValues?: SearchJobSchemaWithoutTitle;
}

export function MobileSearchFiltersDialog(
  props: Readonly<MobileSearchFiltersDialogProps>
) {
  const { onApply, defaultValues } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [tempLocation, setTempLocation] = useState<string>(
    defaultValues?.location ?? ""
  );
  const [tempFullTime, setTempFullTime] = useState<boolean>(
    defaultValues?.fullTime ?? false
  );

  const onSubmit = useCallback(() => {
    const location = tempLocation.trim();

    onApply({ location, fullTime: tempFullTime });
    setIsOpen(false);
  }, [onApply, tempLocation, tempFullTime]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
        <DialogVisuallyHidden>
          <DialogHeader>
            <DialogTitle>Filter Jobs</DialogTitle>
            <DialogDescription>
              Use the filters below to narrow your job search.
            </DialogDescription>
          </DialogHeader>
        </DialogVisuallyHidden>

        <div className="flex flex-col py-6 gap-y-6">
          <div className="flex px-6">
            <TextInputMounted
              name="location"
              icon={<PinIcon />}
              className="h-6 py-0"
              placeholder="Filter by location…"
              value={tempLocation}
              onChange={(e) => setTempLocation(e.target.value)}
            />
          </div>

          <Separator />

          <div className="flex flex-col px-6">
            <CheckboxInput
              name="fullTime"
              checked={tempFullTime}
              onChange={(e) => setTempFullTime(e.target.checked)}
            >
              Full Time Only
            </CheckboxInput>
          </div>

          <div className="w-full flex px-6">
            <Button className="w-full" type="button" onClick={onSubmit}>
              Search
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
