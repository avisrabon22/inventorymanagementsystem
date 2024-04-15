import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" className="w-full border rounded py-2 px-3" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input type="password" id="password" className="w-full border rounded py-2 px-3" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
        </form>
        <div className="mt-4">
          <p>Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link></p>
          <p>Admin login? <Link to="/admin-login" className="text-blue-500">Click here</Link></p>
        </div>
      </div>
    )
}