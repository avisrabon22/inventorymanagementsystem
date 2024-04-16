import { NavLink } from "react-router-dom"


export const Navbar = () => {
    return (
            <nav className="bg-gray-800 p-4">
              <ul className="flex justify-center space-x-4">
                <li>
                  <NavLink
                    to="/dashboard"
                    className="text-white hover:text-gray-300"
                    
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className="text-white hover:text-gray-300"
                   
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className="text-white hover:text-gray-300"
                   
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/orders"
                    className="text-white hover:text-gray-300"
                  >
                    Orders
                  </NavLink>
                </li> 
              </ul>
            </nav>
    )
}