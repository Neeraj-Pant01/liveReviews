const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router()

//post a review
router.post('/',verifyToken,)

//get a review
router.get('/:id',)

//like a review
router.put('/',verifyToken)

//get a product's review
router.post('/')

module.exports = router;