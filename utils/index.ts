export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "fa7b0f2ebfmsh69598e24ae63955p10d5afjsn5ad9e0a37500",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base price per day in dollars
  const mileageFactor = 0.1; // Factor to adjust price based on mileage
  const ageFactor = 0.05; // Factor to adjust price based on car age
  // Calculate the rental rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  // Calculate the final rental rate based on per dAY
  const rentalRatePerDay = basePricePerDay + mileageRate - ageRate;
  return rentalRatePerDay.toFixed(0);
};
