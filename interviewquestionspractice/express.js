const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());  // Add this line to parse JSON bodies

function authorize(req,res,next){
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message: 'unauthorized'})
    }

   const token = authHeader.split(' ')[1];
   if(token !== '12345'){
    return res.status(403).json({message:'forbidden'})
   }else{
    next();
   }
}

app.get('/', (req,res) => {
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
