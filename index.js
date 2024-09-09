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
        success: true,
        numberOfUsers: users.length,
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
            success: false,
            user: "User not found"
        });
        
        return
    }

    res.json({
        success: true,
        user: requestedUser
    });
});

//post a new user
app.post('/users', (req, res)=>{

    users.push(req.body);
    res.json({
        success: true,
        usersNumber: users.length,
        users
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
            success: false,
            User: "User not found!"
        })
        return
    }

    users.splice(userIndex, 1);
    res.json({
        success: true,
        users
    });
});


//declare the port
const port = 4000;

//run our server
app.listen(port, ()=>{
    console.log(`Server listening to port: ${port}`)
});