const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
} = require("../controller/productController");
const { isAuthenticatedUser, authorizedRole } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizedRole("admin"), createProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizedRole("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizedRole("admin"), deleteProduct);

router.route("/product/:id").get(getProductDetails);
router.route("/review").put(isAuthenticatedUser, createProductReview);

module.exports = router;
