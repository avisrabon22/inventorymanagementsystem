import { Navbar } from "../../Component/Navbar/Navbar"
import { OrderItem } from "../../Component/OrderForm/OrderItem"

export const Orders = () => {
    return (
        <>
        <Navbar/>
        <div className="container mx-auto flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4">Order's Form</h2>
            <OrderItem/>
        </div>
        </>
    )
}