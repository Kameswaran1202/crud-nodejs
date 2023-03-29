const express= require('express')
const mongoose = require('mongoose')

const app=express()
mongoose.connect('mongodb+srv://kameswaranvs:admin@cluster0.kcjzgui.mongodb.net/?retryWrites=true&w=majority')


const con = mongoose.connection

app.use(express.json())

const alienRouter=require('./routers/add')
app.use('/add',alienRouter)

con.on('open',function(){
    console.log('connected'); 
})

app.listen(3000,()=>{
    console.log('app connected')
})