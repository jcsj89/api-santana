import express from 'express';

// constants
const port = 3333;

const app = express();

app.get('/',(req,res)=>{
    res.json({message: 'Hello World 2'})
})


app.listen(port, () => {
    console.log(`Server Starts on Port ${port}`)
})



