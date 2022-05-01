const Product = require("../models/productModel");
const add_product = async(req,res)=>{

    try{
        var product =new Product({
            product_id:req.body.product_id,
            product_name:req.body.product_name,
            product_description:req.body.product_description,
            product_price:req.body.product_price,
           
        });
        const product_data = await product.save();
        res.status(200).send({succcess:true,msg:"Product details",data:product_data});

    }catch(error){
        res.status(400).send({success:false,msg:error.message});
    }
}
module.exports={
    add_product
}