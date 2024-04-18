import axios from "axios";

const PRODUCT_URL = "http://localhost:8080/api/v1/products";
const CATEGORY_URL = "http://localhost:8080/api/v1/categories";

const ProductAPI = {
//  products related methods **********************************************************************
    getProducts: async () => {
        try {
            const response = await axios.get(`${PRODUCT_URL}/get_all_products`);
            return response.data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    getProduct: async (productId) => {
        try {
            const response = await axios.get(`${PRODUCT_URL}/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching product:", error);
            throw error;
        }
    },
    addProduct: async (product) => {
        try {
            await axios.post(`${PRODUCT_URL}/products`, product);
        } catch (error) {
            console.error("Error adding product:", error);
            throw error;
        }
    },
    updateProduct: async (product) => {
        try {
            await axios.put(`${PRODUCT_URL}/products/${product.id}`, product);
        } catch (error) {
            console.error("Error updating product:", error);
            throw error;
        }
    },
    deleteProduct: async (productId) => {
        try {
            await axios.delete(`${PRODUCT_URL}/products/${productId}`);
        } catch (error) {
            console.error("Error deleting product:", error);
            throw error;
        }
    },
//  categories related methods **********************************************************************
    getCategories: async () => {
        try {
            const response = await axios.get(`${CATEGORY_URL}/get_all_categories`);
            return response.data;
        } catch (error) {
            console.error("Error fetching categories:", error);
            throw error;
        }
    },

};

export default ProductAPI;
