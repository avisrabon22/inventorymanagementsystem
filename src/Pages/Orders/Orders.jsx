import { Navbar } from "../../Component/Navbar/Navbar"
import OrderBoard from "../../Component/OrderForm/OrderBoard"


export const Orders = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold mb-4">Orders</h2>
                <OrderBoard userRole="admin" />
            </div>
        </>
    )
}