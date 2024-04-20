import axios from "axios";

const PRODUCT_URL = "http://localhost:8080/api/v1/products";
const CATEGORY_URL = "http://localhost:8080/api/v1/categories";

const ProductAPI = {
    //  products related methods **********************************************************************
    // Get all products
    getProducts: async () => {
        try {
            const response = await axios.get(`${PRODUCT_URL}/get_all_products`);
            // console.log(response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    // Get product by id
    getProduct: async (productId) => {
        try {
            const response = await axios.get(`${PRODUCT_URL}/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching product:", error);
            throw error;
        }
    },
    // Add product
    addProduct: async (product) => {
        try {
           return  await axios.post(`${PRODUCT_URL}/add_product`, product);
        } catch (error) {
            console.error("Error adding product:", error);
            throw error;
        }
    },
    // Update product
    updateProduct: async (product) => {
        try {
            await axios.put(`${PRODUCT_URL}/products/${product.id}`, product);
        } catch (error) {
            console.error("Error updating product:", error);
            throw error;
        }
    },
    // Delete product
    deleteProduct: async (productId) => {
        try {
            await axios.delete(`${PRODUCT_URL}/products/${productId}`);
        } catch (error) {
            console.error("Error deleting product:", error);
            throw error;
        }
    },
    //  categories related methods **********************************************************************
    //  Get all categories   
    getCategories: async () => {
        try {
            const response = await axios.get(`${CATEGORY_URL}/get_all_categories`);
            return response;
        } catch (error) {
            console.error("Error fetching categories:", error);
            throw error;
        }
    },
    // Add category
    addCategory: async (category) => {
        try {
            const response = await axios.post(`${CATEGORY_URL}/add_category`, category)
                return response;
        } catch (error) {
            console.error("Error adding category:", error);
            throw error;
        }
    },

};

export default ProductAPI;
