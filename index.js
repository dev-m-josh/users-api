const express = require("express");

//import the users array
const users = require("./users");

const app = express();

app.use(express.json());

//Home page
app.get('/', (req, res)=>{
    res.send("Welcome")
});

//list all the users
app.get('/users', (req, res)=>{
    res.json({
        success: "True",
        usersNumber: users.length,
        users
    })
});

//get a single user
app.get('/users/:userId', (req, res)=>{

    let requestedId = req.params.userId;

    let requestedUser = users.find(user=>
        user.id === parseInt(requestedId));

    if (!requestedUser) {
        res.json({
            success: "False",
            user: "User not found"
        });
        
        return
    }

    res.json({
        success: "True",
        user: requestedUser
    });
});

//post a new user
app.post('/users', (req, res)=>{

    users.push(req.body);
    res.json({
        success: "True",
        usersNumber: users.length,
        user: req.body
    });
});

//delete a selected users
app.delete('/users/:userId', (req, res)=>{
    let requestedId = req.params.userId;

    let userToDelete = users.find(user=>
        user.id === parseInt(requestedId));

    let userIndex = users.indexOf(userToDelete);

    if (userIndex === -1) {
        res.json({
            success: "False",
            User: "User not found!"
        })
        return
    }

    users.splice(userIndex, 1);
    res.json(users);
});


//declare the port
const port = 4000;

//run our server
app.listen(port, ()=>{
    console.log(`Server listening to port: ${port}`)
});