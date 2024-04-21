import React from 'react';

const OrderBoard = ({  }) => {
    // Assuming you have an array of orders
    const orders = [
        { id: 1, name: 'Order 1', user: 'User A' },
        { id: 2, name: 'Order 2', user: 'User B' },
        { id: 3, name: 'Order 3', user: 'User A' },
        // ... more orders
    ];

    // Filter orders based on user role
    const filteredOrders = userRole === 'admin' ? orders : orders.filter(order => order.user === userRole);

    return (
        <div>
            <h1>Order Dashboard</h1>
            {filteredOrders.map(order => (
                <div key={order.id}>
                    <h3>{order.name}</h3>
                    <p>User: {order.user}</p>
                </div>
            ))}
        </div>
    );
};

export default OrderBoard;