import { Link } from "react-router-dom";
import { UserRegisterComponent } from "../../Component/UserProfile/UserRegisterComponent";
export const UserRegister = () => {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-sky-300">Welcome to Inventory Management System</h2>
            <h1 className="flex justify-center text-xl p-5">User Register</h1>
            <UserRegisterComponent />
            <div className="mt-4 flex justify-center text-xl">
                <p>Have a customer account? <Link to="/" className="text-blue-500">Customer Login</Link></p>

            </div>

        </div>
    );
};