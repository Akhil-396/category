const SubCategory=require("../models/subCategoryModel")

const create_subcategory = async(req,res)=>{
    try{
        const subCategory = new SubCategory({
            categry_id:req.body.category_id,
            sub_category:req.body.sub_category
        });
        const sub_cat_data = await subCategory.save();
        res.status(200).send({succcess:true,msg:"sub-Category details",data:sub_cat_data});
    }catch(error){
        res.status(400).send({success:false,msg:error.message})
    }
    }


module.exports={
    create_subcategory
}