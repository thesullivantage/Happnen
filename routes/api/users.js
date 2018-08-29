const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
    .route("/")
    .get(usersController.findAllUsers)
    .post(usersController.createUser);

// Matches with "/api/users/:id"
router
    .route("/:id")
    .get(usersController.findUserByUsername)
    .put(usersController.updateUser)
    .delete(usersController.removeUser);

router 
    .route("/login")
    .post(usersController.validateUser)

router 
    .route("/signup")
    .post(usersController.createUser)

router  
    .route("/populatedata")
    .get(usersController.populateProfile)

router
    .route("/allusers")
    .get(usersController.findAllUsers)
    
module.exports = router;
