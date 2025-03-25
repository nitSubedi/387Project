import { createPool } from 'mariadb';
import { sign } from 'jsonwebtoken';
require('dotenv').config();

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});

app.post("/register", async(req,res)=>{
  const{username,email,password,role} = req.body;
  try{
    const hashedPassword = await bcrypt.hash(password, 10);
    const connection = await pool.getConnection();
    const query =` 
      INSERT INTO users (username,email,password,role)
      VALUES(?,?,?,?)
      `;
    await connection.query(query,[username,email,hashedPassword,role]);
    connection.release;

    const webToken = sign({username,email,password,role},process.env.JWT_SECRET,{expiresIn:'1h'});
    res.status(201).json({message:'user created successfully',webToken});
  }catch(error){
    console.error('Error creating a user',error);
    res.status(500).json({error:'Failed to register user',error});

  }
})

app.post("/login",async(req,res)=>{
  const{username,password}=req.body;
  try{
    const connection = await pool.getConnection();
    const query = `
      SELECT username,password,role
      FROM users
      WHERE username=?
      `;
    const [user] = await connection.query(query,[username]);
    connection.release;
    if(!user){
      return res.status(401).json({error:"Invalid username or password"});
    }
    const passwordValidity = await bcrypt.compare(password,user.password);
    if(!passwordValidity){
      return res.status(401).json({error:"Invalid username or password"});
    }
    const webToken = sign(
      {username: user.username, role: user.role },
      process.env.JWT_SECRET,{expiresIn:'1h'});
    res.status(200).json({
      message:"Successfully logged in",
      webToken,
      user:{
        username:user.username,
        password:user.password,
        role : user.role,
      },
    });  
  }catch(error){
    console.error('error loggin in',error);
    res.status(500).json({error:'error loggin in'});
  }
})

app.get("/dashboard", async(req,res)=>{
  
})