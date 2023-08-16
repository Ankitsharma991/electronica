import "./App.css";
import Header from "./component/layout/Header/Header.js";
import React, { useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./component/layout/footer/Footer";

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
      <Footer />
    </Router>
  );
}

export default App;
