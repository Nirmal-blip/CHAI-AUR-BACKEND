import express from 'express';

import {addProduct,getProducts,updateProduct,deleteProduct,deleteAllProducts} from '../Controllers/product.controller.js';


const product= express.Router();



product.get('/',getProducts);

product.post('/',addProduct);

product.put('/:id',updateProduct);

//to delete all collection(yeh pehle .delete krna pdega soch vrna gpt se puch )
product.delete('/delete_all',deleteAllProducts);



product.delete('/:id',deleteProduct);


export default product;