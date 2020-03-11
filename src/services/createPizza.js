import axios from 'axios';
import { apiBaseUrl } from '../constants';

const createPizza = async pizza => {
  try {
    const response = await axios.post(apiBaseUrl + '/api/v1/pizzas', pizza);

    return response.data;
  } catch(E) {
    return null;
  }
};

export default createPizza;