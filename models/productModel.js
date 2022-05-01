const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    product_id:{
        type:Number,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    product_description:{
        type:String,
        required:true
    },
    product_price:{
        type:Number,
        required:true
    },
    product_image:{
        type:Array,
        
    }
});
module.exports = mongoose.model("product",productSchema);