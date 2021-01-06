import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Store from "./Components/Store";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Store path="/store" component={Store} />
        <ProductDetails path="/prod-info" component={ProductDetails} />
        <Cart path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
