const mariadb = require('mariadb');
const jwt = require('jsonwebtoken');
require('dotenv').config();
 import authMiddleware from '../middleware/authMiddleware' 

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});

app.post('/create_event', authMiddleware, async(req,res)=>{
  const{eventName, location, time, budget }
    
})
