

const express= require('express')
const mongoose= require('mongoose')

const ProductRoutes = require('./Routes/ProductRoutes')
const app= express()
const dotenv=require('dotenv')
dotenv.config()
app.use(express.json())
 

const PORT= process.env.PORT ||  3000

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log('Mongo db connected succesfully');
         app.listen(PORT,()=>console.log(`Port running on server http://localhost:${PORT}`))
        })
.catch((error)=>console.log(error))



app.use('/api/products',ProductRoutes)

app.get('/',(req,res)=>{
    res.send('Hello from Products API')
})

//for posting or adding products

// app.post('/api/products',async(req,res)=>{
//     // const {name,quantity,price,image}= req.body
//      try {
//         // const product=new Product({
//         //     name,
//         //     quantity,   //this is one method
//         //     price,
//         //     image
//         // })
//         // await product.save()

//         const product= await Product.create(req.body)

//         res.status(201).json({message:'Product created succesfully',product})
//      } catch (error) {
//          res.status(500).json({message:error})
//      }
// })





// //for getting all products
// app.get('/api/products',async(req,res)=>{
//    try {
//     const products=await Product.find({})
    

//     res.status(201).json(products)
//    } catch (error) {
//        res.status(500).json({message:error})
//    }
// })

// //for getting single product
// app.get('/api/product/:id',async(req,res)=>{
//      const id=req.params.id
//      try {
//          const productByID=await Product.findById(id)
//          res.status(201).json(productByID)
//      } catch (error) {
//         res.status(500).json({error:error.message})
//      }
// })

// //for updating the product by id

// app.put('/api/product/:id',async(req,res)=>{
//     try {
//         const {id}= req.params

//         const tobeUpdate= await Product.findByIdAndUpdate(id,req.body)
//         if(!tobeUpdate){
//             return res.status(400).json({message:'Product Not found'})
//         }

//         const updatedProduct=await Product.findById(id)

//         res.status(200).json({message:'Product Updated succesfully',updatedProduct})
//     } catch (error) {
//         res.status(500).json({error:error.message})
//     }
// })

// //for deleting the product

// app.delete('/api/product/:id',async(req,res)=>{
//     try {
//         const {id}= req.params
//         const toBeDelete=await Product.findByIdAndDelete(id)
//         if(!toBeDelete){
//             return res.status(404).json({message:'404 Product Not Found'})
//         }

//         res.status(201).json({message:'Product Deleted Succesfully'})

//     } catch (error) {
//         res.status(500).json({error:error.message})
//     }
// })

