const express=require('express')
const route=express.Router()
const db=require('../models')


route.post('/createproduct',(req,res,next)=>{
    db.Product.create({
        reference:req.body.reference,
        nom:req.body.nom,
        marque:req.body.marque,
        description:req.body.description,
        image:req.body.image,
        famille:req.body.famille,
        categorie:req.body.categorie,
        prix:req.body.prix,
        etat:req.body.etat,
        
    }).then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

route.get('/product/:id',(req,res,next)=>{
    db.Product.findOne({where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

route.get('/products',(req,res,next)=>{
    db.Product.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
} )


route.patch('/product/:id',(req,res,next)=>{
    db.Product.update({
        reference:req.body.reference,
        nom:req.body.nom,
        marque:req.body.marque,
        description:req.body.description,
        image:req.body.image,
        famille:req.body.famille,
        categorie:req.body.categorie,
        prix:req.body.prix,
        etat:req.body.etat,
        
    },{where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
} )


route.delete('/product/:id',(req,res,next)=>{
   db.Product.destroy({where:{id:req.params.id}})
   .then(()=>res.send())
} )
module.exports= route
