import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

export const fetchCountry = async countryName => {
  const params = 'fields = name,capital,region,flag';
  const response = await axios.get(`/name/${countryName}?${params}`);

  return response.data;
};
