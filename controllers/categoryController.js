const Category = require("../models/categoryModel")


const addCategory = async(req,res)=>{

try{

    const category = new Category({
        category:req.body.category
    });
    const cat_data = await category.save();
    res.status(200).send({success:true,msg:"Category Data",data:cat_data});
}catch(error){
    res.status(400).send({success:false,msg:error.message});
}

}
module.exports = {
    addCategory
}