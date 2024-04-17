import { useEffect, useState } from "react";
import ProductService from "../../Services/ProductService";



const ProductList = ({ userRole }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProducts()
            .then((response) => {
                setProducts(response);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    const handleDelete = async (productId) => {
        try {
            await ProductService.deleteProduct(productId);
            setProducts(products.filter(product => product.id !== productId));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleEdit = async (productId) => {
        try {
            await ProductService.updateProduct(productId);
            setProducts(products.filter(product => product.id !== productId));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    }

    return (
        <div className="container mx-auto">
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
                            <td className="border px-4 py-2">{product.category}</td>
                            <td className="border px-4 py-2">
                                {userRole === "admin" && (
                                    <>
                                        <button className="mr-2" onClick={()=>handleEdit(product.id)}>Edit</button>
                                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                                    </>
                                )}
                                {userRole === "customer" && <button>Buy</button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export  {ProductList};
