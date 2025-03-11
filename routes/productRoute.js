const router = require("express").Router()
const productController = require("../controllers/productController")

router.post("/", productController.createPost)
router.get("/", productController.getProducts)

module.exports = router