import "./App.css";
import Header from "./component/layout/Header/Header.js";
import React, { useEffect } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./component/layout/footer/Footer";
import Home from "./component/layout/home/Home";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid sans", "Chilanka"],
      },
    });
  });

  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Footer />
    </Router>
  );
}

export default App;
