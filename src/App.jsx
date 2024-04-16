import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { UserProfile } from "./Pages/UserProfile/UserProfile";
import { Products } from "./Pages/Products/Products";
import { NotFound } from "./Pages/Exception/NotFound";
import { Orders } from "./Pages/Orders/Orders";

 const App = () => {
  return (
    <Router>
    <Routes>
      <Route  path='/' exact element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/profile' element={<UserProfile/>} />
      <Route element={<NotFound/>}/>
    </Routes>
    </Router>
  );
};
export default App;