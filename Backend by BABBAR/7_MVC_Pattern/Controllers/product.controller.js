import {Product} from "../Models/product.model.js";



//getting Product
export const getProducts=async(req, res)=>{

    try{
        const products = await Product.find();
        if(!products||products.length===0){
            return res.status(404).json({message: "No products found"});
        }
        res.status(200).json(products);
    }
    
    catch(err){
        console.error("Error fetching products:", err);
        res.status(500).json({message: "Internal Server Error"});
    }


}






//posting products
export const addProduct=async(req, res)=>{
    try{

        const {name,price,description,image}=req.body;
    
     //check if the product exists previously or not(i supposed name to be the primary key for now)
     const check= await Product.find({ name: { $exists: true } })
  
          if(check){
           return res.status(400).json({message: "Product already exists"});
       }

        const newProduct=  new Product({
            name,
            price,
            description,
            image
        })
        await newProduct.save();
        res.status(201).json({message: "Product created successfully"});
    }
    catch(err){
        console.error("Error creating product:", err);
        res.status(500).json({message: "Internal Server Error"});
    }
}


//updating Products

export const updateProduct=async(req, res)=>{
    try{
        const {id}=req.params;
        const {name,price,description,image}=req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            name,
            price,
            description,
            image
        } ,{ new: true } // 👈 returns the updated document
        );

        if(!updatedProduct){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({message: "Product updated successfully"});
    }
    catch(err){
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message 
        })
    }
}




//deleting products
export const deleteProduct=async(req, res)=>{
  try{
    const {id}=req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if(!deletedProduct){
        return res.status(404).json({message: "Product not found"});
    }
    res.status(200).json({message: "Product deleted successfully"});
  }
  catch(err){
    res.status(500).json({
        message:"Internal Server Error",
        error: err.message,
    })
  }
}




//delete All Products

export const deleteAllProducts=async(req, res)=>{
  try{
    const allProducts=await Product.deleteMany({});
    if(!allProducts||allProducts.length===0){
        return res.status(404).json({message: "No products found to delete"});
    }
    // If deleteMany is successful, it returns an object with deletedCount
    res.status(200).json({message: "All products deleted successfully"});
  }
  catch(err){
    res.status(500).json({
        message:"Internal Server Error",
        error: err.message,
    })
  }
}