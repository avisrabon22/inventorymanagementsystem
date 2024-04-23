import axios from "axios";

const ORDER_URL = "http://localhost:8080/api/v1/orders";




export const OrderApi =  {
    //  get Orders
    getOrders: async () => {
        try {
            const response = await axios.get(`${ORDER_URL}/get_all_orders`);
            return response.data;
        } catch (error) {
            console.error("Error fetching orders:", error);
            throw error;
        }

    },
      // get orders by user id
      getOrdersByUserId:async()=>{
        try {
            const response = await axios.get(`${ORDER_URL}/get_orders_by_user_id`);
            return response.data;
        } catch (error) {
            console.error("Error fetching orders:", error);
            throw error;
        }

      },

}

