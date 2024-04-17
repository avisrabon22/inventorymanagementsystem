import axios from "axios";

const PRODUCT_URL = "http://localhost:8080/api/v1";

const ProductAPI = {
    getProducts: async () => {
        try {
            const response = await axios.get(`${PRODUCT_URL}/products`);
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
    }
};

export default ProductAPI;
