module.exports=(sequelize,Datatype)=>{
    const Reclamation =sequelize.define("Reclamation",{
        message:{
            type:Datatype.STRING,
            allowNull:false
        },
        image:{
            type:Datatype.STRING,
            allowNull:false
        },
        
    })
  Reclamation.associate=models=>{
    Reclamation.belongsTo(models.User,{
        onDelete:"cascade"
    })
  }
    return Reclamation 
}
