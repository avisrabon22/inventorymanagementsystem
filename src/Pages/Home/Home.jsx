import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4 text-sky-300">Welcome to Inventory Management System</h2>
      <h2 className="text-2xl font-semibold mb-4">Customer Login</h2>

      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">Email</label>
          <input type="email" id="email" className="w-full border border-sky-300 rounded py-2 px-3" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1">Password</label>
          <input type="password" id="password" className="w-full border border-sky-300 rounded py-2 px-3" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
      </form>

      <div className="mt-4">
        <p>Don't have a customer account? <Link to="/register" className="text-blue-500">Register here</Link></p>
        <p>Shipping Partner login? <Link to="/shipping" className="text-red-500">Click here</Link></p>
        <p>Admin login? <Link to="/admin" className="text-red-500">Click here</Link></p>
      </div>
    </div>
  );
}