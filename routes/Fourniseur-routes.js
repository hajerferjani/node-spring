const express=require('express')
const route=express.Router()
const db=require('../models')


route.post('/createFourniseur',(req,res,next)=>{
    db.Fourniseur.create({
        nom:req.body.nom,
        adresse:req.body.adresse,
        telephone:req.body.telephone,
        email:req.body.email,
        
    }).then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

route.get('/Fourniseur/:id',(req,res,next)=>{
    db.Fourniseur.findOne({where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

route.get('/Fourniseurs',(req,res,next)=>{
    db.Fourniseur.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
} )


route.patch('/Fourniseur/:id',(req,res,next)=>{
    db.Fourniseur.update({
        nom:req.body.nom,
        adresse:req.body.adresse,
        telephone:req.body.telephone,
        email:req.body.email,
        
    },{where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
} )


route.delete('/Fourniseur/:id',(req,res,next)=>{
   db.Fourniseur.destroy({where:{id:req.params.id}})
    .then(()=>res.send())
    //.catch((err)=>res.status(400).send(err))
} )
module.exports= route
