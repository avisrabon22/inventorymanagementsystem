import { Navbar } from "../../Component/Navbar/Navbar";
import { useState, useEffect } from "react";
import ProductService from "../../Services/ProductService";

export const AddProduct = () => {
    const [categories, setCategories] = useState([]);


    const [product, setProduct] = useState({
        productName: "",
        price: "",
        description: "",
        quantity: "",
        productCategory: "",
        barCode: "",
        image: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };
    // Fetch categories from backend API 
    useEffect(() => {
        fetchCategories();
    }, []);

    // Fetch categories method
    const fetchCategories = async () => {
        ProductService.getCategories().then((response) => {
            console.log(response.data);
            setCategories(response.data);
        }).catch((error) => {
            console.error("Error fetching categories:", error);
        });

    };

    // handle form submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(product);
            await ProductService.addProduct(product).then((response) => {
                alert(response.data);
            });
        } catch (error) {
            console.error("Error adding product:", error);
        }

        // Clear form
        setProduct({
            productName: "",
            price: "",
            description: "",
            quantity: "",
            productCategory: "",
            barCode: "",
            image: "",
        });
    };

    return (
        <div>
            <Navbar />
            <h1 className="flex justify-center text-xl">Add Product</h1>
            <div className="container mx-auto flex justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" name="productName" onChange={handleChange} value={product.productName} className="border border-sky-300" />
                    <label>Price</label>
                    <input type="number" name="price" onChange={handleChange} value={product.price} className="border border-sky-300" />
                    <label>Description</label>
                    <input type="text" name="description" onChange={handleChange} value={product.description} className="border border-sky-300" />
                    <label>Quantity</label>
                    <input type="number" name="quantity" onChange={handleChange} value={product.quantity} className="border border-sky-300" />
                    <label>Category</label>
                    <select name="productCategory" className="border border-sky-300" onChange={handleChange} value={product.productCategory}>
                        <option value="">Select category</option>
                        {categories.map((category) => (
                            <option className="text-black" key={category.id} value={category.id}>
                                {category.categoryName}
                            </option>
                        ))}
                    </select>
                    <label>Bar Code</label>
                    <input type="text" name="barCode" onChange={handleChange} value={product.barCode} className="border border-sky-300" />
                    <label>Image</label>
                    <input type="file" name="image" onChange={handleChange} value={product.image} className="border border-sky-300" />
                    <button className="bg-sky-300 w-fit h-fit m-2 rounded-sm active:bg-slate-500 hover:bg-sky-700" type="submit">Add Product</button>
                </form>
            </div>
        </div>
    );
};
