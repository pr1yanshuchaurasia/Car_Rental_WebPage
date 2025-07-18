export async function fetchCars() {
    const headers = {
    'x-rapidapi-key': 'fa7b0f2ebfmsh69598e24ae63955p10d5afjsn5ad9e0a37500',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{headers: headers,});
  const result = await response.json();
  return result;

}