module.exports=(sequelize,Datatype)=>{
    const Product=sequelize.define("Product",{
        
        reference:{
            type:Datatype.STRING,
            allowNull:false
        },
        nom:{
            type:Datatype.STRING,
            allowNull:false
        },
        marque:{
            type:Datatype.STRING,
            allowNull:false
        },
        description:{
            type:Datatype.STRING,
            allowNull:false
        },
        image:{
            type:Datatype.STRING,
            allowNull:false,
            
        },
        famille:{
            type:Datatype.STRING,
            allowNull:false
        },
        categorie:{
            type:Datatype.STRING,
            allowNull:false
        },
        prix:{
            type:Datatype.FLOAT,
            allowNull:false
        },
        etat:{
            type:Datatype.ENUM('promo ', 'nouveau ', 'normal')
        }
    })
    
    Product.associate=models=>{
        Product.belongsTo(models.Fourniseur,{
            onDelete:"cascade"
        })
      }

      
    return Product
  }
  