import { SearchJobsFiltersForm } from "../forms/search-jobs-filters-form/search-jobs-filters-form";

export function HeaderSearchJobsFilters() {
  return (
    <div className="bg-search-filters-background w-full h-20 rounded-6 overflow-hidden">
      <SearchJobsFiltersForm />
    </div>
  );
}
