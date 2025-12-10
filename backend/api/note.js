const mongoose=require('mongoose');
const noteSchema=new mongoose.Schema({
    title:String,
    contante:String,
    cratedAt:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('note',noteSchema);