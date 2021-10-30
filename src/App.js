import Main from "./components/Main";
import Catalog from "./components/Catalog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/catalog/:id">
            <SingleProduct />
          </Route>
          <Route exact path="/catalog">
            <Catalog />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
