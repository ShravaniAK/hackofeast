const express = require('express');
const router = express.Router();
const { addToCart, removeCartItem, getCartItems } = require('../controllers/cart');
const protect = require('../middlewares/authmiddleware');

router.post('/add/:productId', protect, addToCart);
// router.put('/update/:cartItemId', protect, updateCart);
router.delete('/remove/:cartItemId', protect, removeCartItem);
router.get('/', protect, getCartItems);

module.exports = router;
