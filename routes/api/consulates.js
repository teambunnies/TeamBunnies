const router = require("express").Router();
const consulateController = require('../../controllers/consulateController')


router.route('/')
    .get(consulateController.findAll)

router.route('/:id')
    .get(consulateController.findById)
 


module.exports = router