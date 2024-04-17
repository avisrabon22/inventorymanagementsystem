import { useEffect, useState } from "react";

export const ProductList = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        // Call the getProducts method from the ProductService
        // set the products state with the response
        ProductService.getProducts().then((response) => {
            setProducts(response);
        });
    }
        , []);



    return (
        <div className=" container mx-auto">
            <p className="flex justify-center m-2">Buy your products here</p>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Product Name</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className="border px-4 py-2">{product.name}</td>
                            <td className="border px-4 py-2">{product.price}</td>
                            <td className="border px-4 py-2">
                                <button className="mr-2">Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}