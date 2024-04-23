import { useEffect, useState } from "react";
import ProductService from "../../Services/ProductService";
import { useNavigate } from "react-router-dom";


const ProductList = ({ userRole }) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    // Fetch products from backend API
    useEffect(() => {
        ProductService.getProducts()
            .then((response) => {
                setProducts(response);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    // handle buy
    const handleBuy = async (productId) => {
        try {
            await ProductService.buyProduct(productId);
            setProducts(products.filter(product => product.id !== productId));
        } catch (error) {
            console.error("Error buying product:", error);
        }
    };

    // Delete product 
    const handleDelete = async (productId) => {
        try {
            await ProductService.deleteProduct(productId);
            setProducts(products.filter(product => product.id !== productId));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    // Edit product
    const handleEdit = async (productId) => {
        try {
            await ProductService.updateProduct(productId);
            setProducts(products.filter(product => product.id !== productId));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    }

    // Add product
    const handleAdd= async () => {
                   // Redirect to add product page
            // You can use a library like react-router-dom to handle the redirection
            navigate('/addproduct');
        }

        // add category
        const handleAddCategory = async () => {
            // Redirect to add category page
            navigate('/addcategory');
        }

    return (
        <div className="container mx-auto">
           {userRole==="admin" &&
              <>
              <button className="m-2 active:bg-blue-500 hover:bg-sky-700 rounded-sm border border-sky-500 bg-sky-300" onClick={handleAdd}>Add Product</button>
              <button className="m-2 active:bg-blue-500 hover:bg-sky-700 rounded-sm border border-sky-500 bg-sky-300" onClick={handleAddCategory}>Add Category</button>
              <h2 className="flex justify-center text-xl font-bold m-2">Manage your products</h2>
              </>
              }

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
