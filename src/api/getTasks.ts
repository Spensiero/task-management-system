const axios = require('axios');

export const getTasks = async () => {
  try {
    const response = await axios.get("https://mocki.io/v1/3a4bdc84-455e-4dc8-b9f1-ccb9dc9382a5");
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};