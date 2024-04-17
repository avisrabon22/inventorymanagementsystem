import { productApi } from "./api";

const ProductService = () => {
    return {
        getProducts: async () => {
            const response = await productApi.then((res)=>res);
            return response.json();
        },

        
    };
}

export  {ProductService};