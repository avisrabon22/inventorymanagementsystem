import { useState } from "react";

export const CartComponent = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (product) => {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {(cartItems.length === 0 )?( 
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
