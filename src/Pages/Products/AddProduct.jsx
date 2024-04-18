import { Navbar } from "../../Component/Navbar/Navbar";
import { useState, useEffect } from "react";
import ProductService from "../../Services/ProductService";


export const AddProduct = () => {
        const [categories, setCategories] = useState([]);
        
        useEffect(() => {
            // Fetch categories from backend API
            fetchCategories();
        }, []);

        const fetchCategories = async () => {
            try {
                const response = await ProductService.getCategories();
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        return (
            <div>
                <Navbar />
                <h1>Add Product</h1>
                <form>
                    <label>Product Name</label>
                    <input type="text" name="productName" />
                    <label>Price</label>
                    <input type="number" name="price" />
                    <label>Description</label>
                    <input type="text" name="description" />
                    <label>Quantity</label>
                    <input type="number" name="quantity" />
                    <label>Category</label>
                    <select name="productCategory">
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.CategoryName}
                            </option>
                        ))}
                    </select>
                    <label>Bar Code</label>
                    <input type="text" name="barCode" />
                    <label>Image</label>
                    <input type="text" name="image" />
                    <button type="submit">Add Product</button>
                </form>
            </div>
        );
    };
    