const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    category:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("category1",categorySchema);