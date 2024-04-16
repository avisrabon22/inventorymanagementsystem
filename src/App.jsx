import { BrowserRouter,Route } from "react-router-dom";

 const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>
  );
};
export default App;