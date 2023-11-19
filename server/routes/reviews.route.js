const { addReview, getAreview, likeReview, getAProductsReview } = require("../controllers/review.controller");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router()

//post a review
router.post('/',verifyToken,addReview)

//get a review
router.get('/:id',getAreview)

//like a review
router.put('/like/:id',verifyToken, likeReview)

//get a product's review
router.get('/', getAProductsReview)

module.exports = router;