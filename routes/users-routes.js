const express=require('express')
const route=express.Router()
const db=require('../models')


route.post('/createuser',(req,res,next)=>{
    db.User.create({
        nom: req.body.nom,
        prenom:  req.body.prenom,
        //datenais: req.body.datenais,
        telephone: req.body.telephone,
        ville: req.body.ville,
        email:req.body.email,
        password:  req.body.password
        
    }).then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

route.get('/user/:id',(req,res,next)=>{
    db.User.findOne({where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

route.get('/users',(req,res,next)=>{
    db.User.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
} )


route.patch('/user/:id',(req,res,next)=>{
    db.User.update({
        nom: req.body.nom,
        prenom:  req.body.prenom,
        //datenais: req.body.datenais,
        telephone: req.body.telephone,
        ville: req.body.ville,
        email:req.body.email,
        password:  req.body.password

    },{where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
} )


route.delete('/user/:id',(req,res,next)=>{
   db.User.destroy({where:{id:req.params.id}})
   .then(()=>res.send())
} )
module.exports= route
