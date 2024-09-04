const express=require('express');
const mongoose=require('mongoose');


const authSchemaForm=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    date:{
        type:Date
    },
    description:{
        type:String
    },
    mobileNo:{
        type:Number
    },
    address:{
        type:String
    }


})


const authOrder=mongoose.model('orderForm',authSchemaForm);
module.exports=authOrder;