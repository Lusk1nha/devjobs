import { HeaderSearchJobsFilters } from "../../components/header-search-jobs-filters/header-search-jobs-filters";

export default function Page() {
  return (
    <main className="w-full h-full flex justify-center -mt-10 px-6 lg:px-16 z-10">
      <div className="w-full h-full md:max-w-w-content-md lg:max-w-w-content-lg flex flex-col">
        <HeaderSearchJobsFilters />
      </div>
    </main>
  );
}
