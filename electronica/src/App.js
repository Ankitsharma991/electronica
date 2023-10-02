import "./App.css";
import Header from "./component/layout/Header/Header.js";
import React, { useEffect } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./component/layout/footer/Footer";
import Home from "./component/layout/home/Home";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignup from "./component/User/LoginSignup";
import store from "./store";
import { loadUser } from "./actions/userActions";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/products/:keyword" component={Products} />
      <Route exact path="/login" component={LoginSignup} />
      <Footer />
    </Router>
  );
}

export default App;
