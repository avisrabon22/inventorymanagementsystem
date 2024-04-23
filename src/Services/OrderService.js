import { OrderApi } from "./OrderApi";

export const OrderService = {
    // Get all orders
    getOrders: async () => {
        try {
            return await OrderApi.getOrders();
        } catch (error) {
            throw error;
        }
    },
    // Get order by user id
    getOrderByUserId: async (userId) => {
        try {
            return await OrderApi.getOrdersByUserId(userId);
        } catch (error) {
            throw error;
        }
    }
};