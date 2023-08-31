// Types
import { FilterProps } from "@/types";

export const fetchCars = async (filters: FilterProps) => {
  // destructure filters
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers = {
    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY || "",
    "X-RapidAPI-Host": process.env.RAPIDAPI_HOST || "",
  };
  const baseUrl = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

  try {
    const response = await fetch(baseUrl, { headers: headers });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
