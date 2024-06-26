import ProductAPI from "./ProductApi";
const ProductService = {
    //   Products related methods **********************************************************************

    //  Get all products
    getProducts: async () => {
        try {
            return await ProductAPI.getProducts();
        } catch (error) {
            throw error;
        }
    },
    getProductByUserId: async (userId) => {
        try {
            return await ProductAPI.getProductByUserId(userId);
        } catch (error) {
            throw error;
        }
    },
    // Delete product
    deleteProduct: async (productId) => {
        try {
            await ProductAPI.deleteProduct(productId);
        } catch (error) {
            throw error;
        }
    },
    // Add product
    addProduct: async (product) => {
        try {
            return await ProductAPI.addProduct(product);
        } catch (error) {
            throw error;
        }
    },
    // Update product
    updateProduct: async (product) => {
        try {
            await ProductAPI.updateProduct(product);
        } catch (error) {
            throw error;
        }
    },
    // Get product by id
    getProduct: async (productId) => {
        try {
            return await ProductAPI.getProduct(productId);
        } catch (error) {
            throw error;
        }
    },
    // Categories related methods **********************************************************************
    // get all categories
    getCategories: async () => {
        try {
            return await ProductAPI.getCategories();
        } catch (error) {
            throw error;
        }
    },

    // Add category
    addCategory: async (category) => {
        try {
            const response = await ProductAPI.addCategory(category);
            return response;
        } catch (error) {
            throw error;
        }
    },
};
export default ProductService;