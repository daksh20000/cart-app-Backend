const Products = require("../JsonData/Products")

const productsController = (req, res)=>{
    try {
        return res.status(200).json({
            success: true,
            message : "Products fetched successfully",
            data : Products
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"Internal server error"
        })
    }
}

module.exports = productsController

