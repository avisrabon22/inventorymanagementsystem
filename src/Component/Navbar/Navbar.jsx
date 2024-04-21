import { NavLink } from "react-router-dom"


export const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-1">
      <h1 className="text-white text-start text-xl mb-1">Inventory Management</h1>
      <ul className="flex justify-center space-x-4">
        <li>
        <h1 className="text-white text-center text-xl mb-2">
          <NavLink
          to="/dashboard"
          className="text-white hover:text-gray-300"
          >
          Dashboard
          </NavLink>
        </h1>
        </li>
       
        <li>
        <h1 className="text-white text-center text-xl mb-2">
          <NavLink
          to="/products"
          className="text-white hover:text-gray-300"
          >
          Products
          </NavLink>
        </h1>
        </li>
        <li>
        <h1 className="text-white text-center text-xl mb-2">
          <NavLink
          to="/cart"
          className="text-white hover:text-gray-300"
          >
          Cart
          </NavLink>
        </h1>
        </li>
        <li>
        <h1 className="text-white text-center text-xl mb-2">
          <NavLink
          to="/orders"
          className="text-white hover:text-gray-300"
          >
          Orders
          </NavLink>
        </h1>
        </li> 
        <li>
        <h1 className="text-white text-center text-xl mb-2">
          <NavLink
          to="/profile"
          className="text-white hover:text-gray-300"
          >
          Profile
          </NavLink>
        </h1>
        </li>
      </ul>
      </nav>
    )
}