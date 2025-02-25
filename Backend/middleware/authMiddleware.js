const express = require('express');
const router = express.Router();
const pool = require('./database');
const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader||!authHeader.startsWith('Bearer')){
        return res.status(401).json({error:"Invalid Token"});
    }

    const token = auth.Header.split(' ')[1];
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(error){
        console.error('token verfication error',err);
        return res.status(401).json({error:'Invalid token'})
    }
};