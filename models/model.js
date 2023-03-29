const mongoose = require('mongoose')

const user =new mongoose.Schema({
    name:{
        type : String,
        required:true
    
    },
    age:{
        type : String,
        required:true
        

    },
    placed:{
        type : Boolean,
        default : false
    }
})

module.exports= mongoose.model('add',user)