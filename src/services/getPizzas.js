import axios from 'axios';
import { apiBaseUrl } from "../constants";

const getPizzas = async () => {
 try {
   const response = await axios.get(apiBaseUrl + '/api/v1/pizzas');

   return response.data;
 } catch(E) {
   return null;
 }
};

export default getPizzas;