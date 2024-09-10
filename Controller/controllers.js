const users = require("../users");

//list all users
function getAllUser (req, res){
    res.json({
        success: true,
        numberOfUsers: users.length,
        users
    })
};

//get a single user
function getUserById(req, res){

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
};

//Add a new user
function addNewUser(req, res){
    users.push(req.body);
    res.json({
        success: true,
        usersNumber: users.length,
        users
    });
}

//delete a selected user by id
function deleteUserById(req, res){
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
};

//get user by password
function userByPassword(req, res) {
    let reqPassword = req.params.userPassword;
    
    let requestedUser = users.find(user=> 
        user.password === (reqPassword));
    
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
}

module.exports = {getAllUser, getUserById, addNewUser, deleteUserById, userByPassword}