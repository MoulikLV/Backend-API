const express= require('express')
const router=express.Router()
const {  addProducts,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct} =require('../Controllers/ProductController')

router.post('/',addProducts)
router.get('/',getProducts)
router.get('/:id',getProductById)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports=router
