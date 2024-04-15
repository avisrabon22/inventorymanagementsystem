import { BrowserRouter,Routes,Route} from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { UserProfile } from "./Pages/UserProfile/UserProfile";
import { Products } from "./Pages/Products/Products";
import { NotFound } from "./Pages/Exception/NotFound";
import { Orders } from "./Pages/Orders/Orders";

 const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' component={Home} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/products' component={Products} />
      <Route path='/orders' component={Orders} />
      <Route path='/profile' component={UserProfile} />
      <Route Component={NotFound}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;