export const updateSearchParams = (type: string, value: string) => {
  // initialize a URLSearchParams object
  const searchParams = new URLSearchParams(window.location.search);
  // set new params
  searchParams.set(type, value);
  // create pathname
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
