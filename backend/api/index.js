const express =require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const note=require('./note')
const app=express();
app.use(cors());
mongoose.connect("mongodb://localhost:207017/note",{useNewUrlParser:true,useUnifideTopology:true});
app.use(express.json());
app.get('/api/note',async(req,res)=>{
try{
    const note=await note.find()
    res.status(200).json({message:"fatch note sucsssessfull",data:note});
}
catch(error){
    res.status(500).json({message:"server fall",error:err});
}
}).then(()=>{
    console.log("connect to mongodb")
}).catch(
err.console.console.error()
);
app.listen(5000,()=>{
    console.log("the servr is running at port 5000")
})