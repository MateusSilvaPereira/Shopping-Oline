import axios from "axios";

const apiURL = "https://api.mercadolibre.com/sites/MLB";

const fetchProducts = async (query: string) => {
  try {
    const response = await axios.get(`${apiURL}/search?q=${query}`);
    return response.data.results;
  } catch (error) {
    console.error("Error ao buscar produtos:", error);
    return [];
  }
};

export default fetchProducts;
