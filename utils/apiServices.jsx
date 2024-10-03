import axios from 'axios';

export const fetchDogBreeds = async () => {
  const response = await axios.get('https://api.thedogapi.com/v1/breeds');    
  return response.data;
};
