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

    const handleAdd= async () => {
                   // Redirect to add product page
            // You can use a library like react-router-dom to handle the redirection
            history.push('/addproduct');
        }

    return (
        <div className="container mx-auto">
           {userRole==="admin" && <button className="m-2" onClick={handleAdd}>Add Product</button>}
            { userRole === "admin" && <h2 className="flex justify-center text-xl m-2">Manage your products</h2>}
            { userRole === "customer" && <p className="flex justify-center m-2">Buy & View your products here</p>}
           
            <table className="table-auto w-full">
                <thead className="border border-sky-200">
                    <tr>
                        <th className="px-4 py-2 border border-sky-200">Product Name</th>
                        <th className="px-4 py-2 border border-sky-200">Price</th>
                        <th className="px-4 py-2 border border-sky-200">Description</th>
                        <th className="px-4 py-2 border border-sky-200">Quantity</th>
                        <th className="px-4 py-2 border border-sky-200">Category</th>
                        <th className="px-4 py-2 border border-sky-200">Bar Code</th>
                        <th className="px-4 py-2 border border-sky-200">Image</th>
                        <th className="px-4 py-2 border border-sky-200">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className="border px-4 py-2">{product.productName}</td>
                            <td className="border px-4 py-2">{product.price}</td>
                            <td className="border px-4 py-2">{product.description}</td>
                            <td className="border px-4 py-2">{product.quantity}</td>
                            <td className="border px-4 py-2">{product.productCategory}</td>
                            <td className="border px-4 py-2">{product.barCode}</td>
                            <td className="border px-4 py-2">{product.image}</td>

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
