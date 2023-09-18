import React, { Fragment, useEffect } from "react";
import "./Home.css";
import { CgMouse } from "react-icons/cg";
import Product from "./ProductCard.js";
import MetaData from "../MetaData";
import { clearErrors, getProduct } from "../../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../loader/Loader";
import { useAlert } from "react-alert";

function Home() {
  const alert = useAlert();

  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Electronica" />
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
            {products &&
              products.map((product) => <Product product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;
