import { FilterIcon } from "@devjobs/icons/filter-icon";
import { Button } from "@devjobs/ui/button";

export function OpenFilterDialogAction() {
  return (
    <Button type="button" variant="ghost">
      <FilterIcon />
    </Button>
  );
}
