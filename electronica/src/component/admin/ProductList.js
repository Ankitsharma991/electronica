import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import {clearErrors, getAdminProducts} from "../../actions/productActions"
import {Link} from "react-router-dom"
import {useAlert} from "react-alert"
import { Button } from "@material-ui/core";
import { Metadata } from "../";


const ProductList = () => {
  return <div></div>;
};

export default ProductList;
