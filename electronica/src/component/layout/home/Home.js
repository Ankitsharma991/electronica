import React, { Fragment } from "react";
import "./Home.css";
import { CgMouse } from "react-icons/cg";
import Product from "./Product.js";

const product = {
  name: "Boat Immortal 150",
  images: [
    {
      url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/LED-LIGHTS.jpg?v=1686726447",
    },
  ],
  _id: "an_kit.11",
  price: "$21",
};

function Home() {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to Electronica</p>
        <h1>FIND AMAZING GADGETS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
}

export default Home;
