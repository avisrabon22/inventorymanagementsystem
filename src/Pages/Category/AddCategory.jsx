import { useState } from "react";
import { Navbar } from "../../Component/Navbar/Navbar"
import ProductService from "../../Services/ProductService";
import {notifySuccess,notifyError} from "../../Utils/Notification";


export const AddCategory = () => {
    const [category, setCategory] = useState({
        categoryName: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setCategory({
            ...category,
            [name]: value,
        });
        
    }
 // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

            try 
            {
                const response = ProductService.addCategory(category);
                   notifySuccess((await response).data);
            } 
            catch(error){
               
             
            };
    
        // Clear form
        setCategory({
            categoryName: "",
        });
    }


    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <h2 className="flex justify-center text-2xl font-semibold mb-4">Add Category</h2>

                <form className="flex justify-center" onSubmit={handleSubmit}>

                    <div className="flex flex-col m-2">
                        <label htmlFor="categoryName">Category Name</label>
                        <input className="border border-sky-400 rounded-sm" type="text" id="categoryName" name="categoryName" onChange={handleChange} value={category.categoryName} required />

                        <button type="submit" className="m-2 active:bg-blue-500 hover:bg-sky-700 rounded-sm border border-sky-500 bg-sky-300">Add Category</button>
                    </div>
                </form>
            </div>
        </>
    )
}