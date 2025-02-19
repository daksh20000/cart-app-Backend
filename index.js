require("dotenv").config()

const cors = require("cors")
const express = require('express');
const app = express();
const productRouter = require("./router/product-router")

app.use(cors());

app.use(express.json())
app.use('/api',productRouter)

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})