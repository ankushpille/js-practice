const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());  // Add this line to parse JSON bodies

app.get('/', (req,res) => {
    res.send('Hello world');
})

app.post('/user',(req,res) => {
    console.log("request is hit")
    const user = req.body;
    res.json({ message: 'User created', user: user.name });  // Fixed response format
})

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
})
