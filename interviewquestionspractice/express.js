const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const jwt = require('jsonwebtoken');   
const secret_key = "12345"     

app.use(express.json());  // Add this line to parse JSON bodies
app.use(cors());  // Enable CORS for all routes

app.post('/login',(req,res) => {
    const {username,password} = req.body;
    if(username === 'ankush' && password === '12345'){
        const token = jwt.sign({username},secret_key,{expiresIn: '1h'})
        res.json({token});
    }
    else{
        res.status(401).json({message: 'Invalid credentials'})
    }
})

function authorize(req,res,next){
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message: 'unauthorized'})
    }

   const token = authHeader.split(' ')[1];
     jwt.verify(token,secret_key,(err,decoded) => {
        if(err){
            return res.status(403).json({message: 'Forbidden'})
        }
        req.user = decoded;
        next();
     })
}



app.get('/hello', (req,res) => {
    res.send('Hello world');
})

app.post('/user', authorize, (req,res) => {
    try {
        const user = req.body;
        // Only reaches this code if authorization was successful
        console.log("User creation authorized");
        res.json({ message: 'User created', user: user.name });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
})

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
})
