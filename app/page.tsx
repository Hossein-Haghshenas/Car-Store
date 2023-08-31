// Components
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
// Utils
import { fetchCars } from "@/utils";
// Types
import { FilterProps } from "@/types";
// Constants
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({ searchParams }: { searchParams: FilterProps }) {
  // fetch cars data
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  // check data is empty or not
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      {/* hero section */}
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        {/* search and filters section */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {/* cars section */}

        {/* check if data is't empty then show cars else show a message */}
        {!isDataEmpty ? (
          // show cars
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            {/* pagination btn */}
            <ShowMore pageNumber={(searchParams.limit || 10) / 10} isNext={(searchParams.limit || 10) > allCars.length} />
          </section>
        ) : (
          // show a message for no result
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>notice : please turn on your vpn </p>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
