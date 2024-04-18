import ProductAPI  from "./api";
const ProductService = {
//   Products related methods **********************************************************************
    getProducts: async () => {
        try {
            return await ProductAPI.getProducts();
        } catch (error) {
            throw error;
        }
    },
    deleteProduct: async (productId) => {
        try {
            await ProductAPI.deleteProduct(productId);
        } catch (error) {
            throw error;
        }
    },
    addProduct: async (product) => {
        try {
            await ProductAPI.addProduct(product);
        } catch (error) {
            throw error;
        }
    },
    updateProduct: async (product) => {
        try {
            await ProductAPI.updateProduct(product);
        } catch (error) {
            throw error;
        }
    },
    getProduct: async (productId) => {
        try {
            return await ProductAPI.getProduct(productId);
        } catch (error) {
            throw error;
        }
    },
    // Categories related methods **********************************************************************
    getCategories: async () => {
        try {
            return await ProductAPI.getCategories();
        } catch (error) {
            throw error;
        }
    },
    get getCategories() {
        return this._getCategories;
    },
    set getCategories(value) {
        this._getCategories = value;
    },
};
export  default ProductService;