const router = require("express").Router();
const userController = require('../../controllers/userController')
// const passport = require("../../controllers/passportController");


router.route('/')
    .get(userController.findAll)
    .post(userController.create)
    .get(userController.getAuthenticatedUser)


router.route('/:id')
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);
router
    .route("/login")
    // .post(passport.authenticate("local"), userController.login);

router
    .route("/logout")
    .post(userController.logout)

module.exports = router