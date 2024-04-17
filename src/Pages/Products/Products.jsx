import { Navbar } from "../../Component/Navbar/Navbar"
import { ProductList } from "../../Component/ProductList/ProductList"

export const Products = () => {
    return (
        <>
        <Navbar/>
        <div className="container mx-auto">
            <h2 className="flex justify-center text-2xl font-semibold mb-4">Products</h2>
            <ProductList userRole="admin"/>
        </div>
        </>
    )
}