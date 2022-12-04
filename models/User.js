module.exports=(sequelize,Datatype)=>{
    const User=sequelize.define("User",{
        nom:{
            type:Datatype.STRING,
            allowNull:false
        },
        prenom:{
            type:Datatype.STRING,
            allowNull:false
        },
      
        telephone:{
            type:Datatype.INTEGER,
            allowNull:false
        },
        ville:{
            type:Datatype.STRING,
            allowNull:false,
            
        },
     
        email:{
            type:Datatype.STRING,
            allowNull:false
        },
        password:{
            type:Datatype.STRING,
            allowNull:false
            
        }
    })
    User.associate=models=>{
        User.hasMany(models.Reclamation,{
            onDelete:"cascade"
        })
    }
    return User
}
