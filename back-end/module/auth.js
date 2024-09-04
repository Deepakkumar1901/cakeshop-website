const express=require('express');
const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://deepakkumarv46:eW7wd8jMv8NxyMvK@cluster0.a5o1nsb.mongodb.net/cake')
.then(()=>console.log('MongoDB is connected'))
.catch(err=>console.log(err))

const authSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobileNo:{
        type:Number
    },
    password:{
        type:String
    }


})


const authModel=mongoose.model('auth',authSchema);
module.exports=authModel;