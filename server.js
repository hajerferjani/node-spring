const express=require("express")
const app=express()
const config = require('./config/config')
const db=require('./models')
const userRoutes=require("./routes/users-routes")
const cors=require("cors")
const productRoutes=require("./routes/products-routes")
const FourniseurRoutes=require("./routes/Fourniseur-routes")
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',userRoutes)
app.use('/',productRoutes)
app.use('/',FourniseurRoutes)

db.sequelize.sync().then(()=>{
    app.listen(3000,()=>console.log("server listening in port 3000"))
})