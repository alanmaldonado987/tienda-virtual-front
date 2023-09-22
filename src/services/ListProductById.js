import axios from 'axios';

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
