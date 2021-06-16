const mongoose=require('mongoose')

const carrotsSchema=new mongoose.Schema(
    {
        total_balance:{
            type:Number,
            required:true
        },

        issued_date:{
            type:Date,
            required:false,
            default:Date.now
        },

        expiry_date:{
            type:Date,
            required:false,
            default:Date.now
        }
    }

)
module.exports=mongoose.model('Carrot',carrotsSchema)