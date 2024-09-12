
const {users, bcrypt} = require("../users");

{
const {users, bcrypt} = require("../users");

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
        numberOfUsers: users.length,
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
}



//get user by password
async function loginUser(req, res) {
    let userDetails = req.body;

    //encrypt the password
    //let encryptPassword = await bcrypt.hash(userDetails.password, 8);
    //console.log(encryptPassword);
    
    //check username
    let requestedUser = users.find(user=>
        user.username === (userDetails.username)
    );

 
    try {
         
    //compare the user password and the encrypted password
    let passwordCompare = await bcrypt.compare(userDetails.password, requestedUser.password);

    if (passwordCompare) {
        res.json({
            Message:'logged successfully'
        })

    }else{
        res.json({
            Message:'Wrong creditials!'
        });
    }

    } catch (error) {
        res.status(500).json(error,{
            Message:'Internal sever error'
        });
    }
};


module.exports = { getAllUser, getUserById, addNewUser, deleteUserById, loginUser };