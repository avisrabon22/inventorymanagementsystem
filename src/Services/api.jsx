import axios from "axios";


const PRODUCT_URL = "http://localhost:8080/api/v1/getProducts";

const productApi = axios.get({
    baseURL: PRODUCT_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export { productApi};