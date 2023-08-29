export const fetchCars = async () => {
  const headers = {
    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY || "",
    "X-RapidAPI-Host": process.env.RAPIDAPI_HOST || "",
  };
  const baseUrl = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";

  try {
    const response = await fetch(baseUrl, { headers: headers });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
