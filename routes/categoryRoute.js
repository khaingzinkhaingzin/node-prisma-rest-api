const router = require("express").Router()
const categoryController = require("../controllers/categoryController")

router.post("/", categoryController.createCategory)
router.get("/", categoryController.getCategories)
router.put("/:id", categoryController.updateCategory)

module.exports = router