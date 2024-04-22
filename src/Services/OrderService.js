export const OrderService = {
    // Get all orders
    getOrders: async () => {
        try {
            return await OrderAPI.getOrders();
        } catch (error) {
            throw error;
        }
    },
    // Get order by id
    getOrder: async (orderId) => {
        try {
            return await OrderAPI.getOrder(orderId);
        } catch (error) {
            throw error;
        }
    },
    // Get order by user id
    getOrderByUserId: async (userId) => {
        try {
            return await OrderAPI.getOrderByUserId(userId);
        } catch (error) {
            throw error;
        }
    },
    // Add order
    addOrder: async (order) => {
        try {
            return await OrderAPI.addOrder(order);
        } catch (error) {
            throw error;
        }
    },
    // Update order
    updateOrder: async (order) => {
        try {
            await OrderAPI.updateOrder(order);
        } catch (error) {
            throw error;
        }
    },
    // Delete order
    deleteOrder: async (orderId) => {
        try {
            await OrderAPI.deleteOrder(orderId);
        } catch (error) {
            throw error;
        }
    },
};