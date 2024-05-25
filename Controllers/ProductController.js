const Product= require('../Models/Product')


const addProducts=async(req,res)=>{
    try {
        // const product=new Product({
        //     name,
        //     quantity,   //this is one method
        //     price,
        //     image
        // })
        // await product.save()

        const product= await Product.create(req.body)

        res.status(201).json({message:'Product created succesfully',product})
     } catch (error) {
         res.status(500).json({message:error})
     }
}

const getProducts=async(req,res)=>{
    try {
        const products=await Product.find({})
        
    
        res.status(201).json(products)
       } catch (error) {
           res.status(500).json({message:error})
       }
}

const getProductById=async(req,res)=>{
    const {id}=req.params
    try {
        const productByID=await Product.findById(id)
        if(!productByID){
            return res.status(404).json({message:'404 Product Not found'})
        }
        res.status(201).json(productByID)
    } catch (error) {
       res.status(500).json({error:error.message})
    }
}

const updateProduct=async(req,res)=>{
    try {
        const {id}= req.params

        const tobeUpdate= await Product.findByIdAndUpdate(id,req.body)
        if(!tobeUpdate){
            return res.status(400).json({message:'Product Not found'})
        }

        const updatedProduct=await Product.findById(id)

        res.status(200).json({message:'Product Updated succesfully',updatedProduct})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const deleteProduct=async(req,res)=>{
    try {
        const {id}= req.params
        const toBeDelete=await Product.findByIdAndDelete(id)
        if(!toBeDelete){
            return res.status(404).json({message:'404 Product Not Found'})
        }

        res.status(201).json({message:'Product Deleted Succesfully'})

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports={
    addProducts,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
}