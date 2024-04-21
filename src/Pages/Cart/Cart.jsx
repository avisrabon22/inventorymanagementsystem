import { CartComponent } from "../../Component/Cart/CartComponent";
import { Navbar } from "../../Component/Navbar/Navbar";

export const Cart = () => {
    return (
        <div>
            <Navbar cartOption={true} />
            <h1 className="flex justify-center text-xl font-bold">Your Cart</h1>
            <CartComponent />
        </div>
    );
}