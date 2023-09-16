
const mongoose =require('mongoose');
const schema4 =new mongoose.Schema({
    
    Task:{
        type:String,
    }
})
const Todo =new mongoose.model('Todo',schema4);
module.exports=Todo;