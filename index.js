const express = require("express");
const { userRouter } = require("./Router/routers");

const app = express();
app.use(express.json());

app.use(userRouter);


//Home page
app.get('/', (req, res)=>{
    res.send("Welcome")
});


//declare the port
const port = 4000;

//run our server
app.listen(port, ()=>{
    console.log(`Server listening to port: ${port}`)
});