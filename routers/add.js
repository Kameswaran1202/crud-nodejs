const express= require('express')
const router= express.Router()
const adduser=require('../models/model')


router.get('/',async(req,res)=>{
    // res.send('get request')
    try {

        const adds= await adduser.find()
        res.json(adds)
    }
    catch(err){
        res.send('Error'+err)
    }

})


router.get('/:id',async(req,res)=>{
    // res.send('get request')
    try {

        const add= await adduser.findById(req.params.id)
        res.json(add)
    }
    catch(err){
        res.send('Error'+err)
    }

})


router.patch('/:id',async(req,res)=>{
    // res.send('get request')
    try {

        const add= await adduser.findById(req.params.id)
        add.placed=req.body.placed
        const a1=await add.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error'+err)
    }

})

router.post('/',async(req,res)=>{
    // res.send('get request')
   const add= new adduser({
    name: req.body.name,
    age: req.body.age,
    placed: req.body.placed

   })

   try{
    const a1=await add.save()
    const a2=await adduser.find()
    res.json(a2)
   }
   catch(err){
    console.log('Error',err)
   }

})


router.delete('/:id', async (req, res) => {
    try {
      const deletedAdd = await adduser.findByIdAndDelete(req.params.id)
      if (!deletedAdd) {
        return res.status(404).send('Add not found')
      }
      const adds = await adduser.find()
      res.json(adds)
    } catch (err) {
      res.status(500).send('Error' + err)
    }
  })
  



module.exports=router