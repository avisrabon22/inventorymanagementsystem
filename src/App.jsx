import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { UserProfile } from "./Pages/UserProfile/UserProfile";
import { Products } from "./Pages/Products/Products";
import { NotFound } from "./Pages/Exception/NotFound";
import { Orders } from "./Pages/Orders/Orders";
import { UserRegister } from "./Pages/UserProfile/UserRegister";
import { AddProduct } from "./Pages/Products/AddProduct";
import { UserAdmin } from "./Pages/UserProfile/UserAdmin";
import { UserShipping } from "./Pages/UserProfile/UserShipping";
import { AddCategory } from "./Pages/Category/AddCategory";
import { Cart } from "./Pages/Cart/Cart";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/admin' element={<UserAdmin />} />
        <Route path='/shipping' element={<UserShipping />} />
        <Route path='/register' element={<UserRegister />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default App;