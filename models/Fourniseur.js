module.exports=(sequelize,Datatype)=>{
    const Fourniseur=sequelize.define("Fourniseur",{
        nom:{
            type:Datatype.STRING,
            allowNull:false
        },
        adresse:{
            type:Datatype.STRING,
            allowNull:false
        },
        telephone:{
            type:Datatype.INTEGER,
            allowNull:false
        },
        email:{
            type:Datatype.STRING,
            allowNull:false
        }

        
    })
    Fourniseur.associate=models=>{
        Fourniseur.hasMany(models.Product,{
            onDelete:"cascade"
        })
    }

    return Fourniseur
  }
  