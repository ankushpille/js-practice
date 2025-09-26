const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [
    {id:1, name:'alice',email: 'alice@example.com',age:25},
    {id:2, name:'bob',email: 'bob@example.com',age:30},
    {id:3, name:'charlie',email: 'charlie@example.com',age:35}
];

const products = [
   {id:1, name:'iphone', price: 7000, stock: 10},
   {id:2, name:'hp', price:10000,stock: 5}
]

//middleware 
const validateUserId = (req,res,next) => {
    const userId = parseInt(req.params.id);
    if(isNaN(userId)){
        return res.status(400).json({
            success: false,
            message: 'invalid user id'
        })
    }
    next();
}


app.get('/users/:id',validateUserId,(req,res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if(user){
        return res.json({
            success: true,
            data: user
        })
    } else{
        return res.status(404).json({
            success:false,
            message: 'User not found'
        })
    }
})

app.post('/products',(req,res) => {
     const {name, price,stock} = req.body
     if(!name || !price || !stock){
        return res.json({
            success:false,
            message: 'details are not correct'
        })
     }

     const newproduct = {
        id: products.length +1,
        name: name,
        price: price,
        stock: stock

     }

     products.push(newproduct);

     return res.json({
      success: true,
      product:newproduct
   })
})

app.listen(port,() => {
    console.log(`server running on port ${port}`);
})