const express = require("express")
const categoryRoute = require("./routes/categoryRoute")
const productRoute = require("./routes/productRoute")

const app = new express()

app.use(express.json())

app.use("/categories", categoryRoute)
app.use("/products", productRoute)

app.listen(3000, () => console.log('Server running on port 3000...'))