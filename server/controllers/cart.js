const Cart = require('../models/cart');

const addToCart = async (req, res) => {
    try {
        const productId = req.params.productId;
        const userId = req.userData.userId;

        // Check if the product already exists in the cart
        const existingItem = await Cart.findOne({ user: userId, product: productId });

        if (existingItem) {
            // If the product already exists, update its quantity
            existingItem.quantity += 1;
            await existingItem.save();
        } else {
            // If the product doesn't exist, create a new cart item
            const newItem = new Cart({
                user: userId,
                product: productId
            });
            await newItem.save();
        }

        res.status(200).json({ success: true, message: 'Product added to cart successfully.' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// const updateCart = async (req, res) => {
//     try {
//         const cartItemId = req.params.id;
//         const quantity = req.body.quantity;

//         const cartItem = await Cart.findById(cartItemId);
//         if (!cartItem) {
//             return res.status(404).json({ success: false, message: 'Cart item not found.' });
//         }

//         cartItem.quantity = quantity;
//         await cartItem.save();

//         res.status(200).json({ success: true, message: 'Cart item updated successfully.' });
//     } catch (error) {
//         res.status(500).json({ success: false, error: error.message });
//     }
// };

const removeCartItem = async (req, res) => {
    try {
        const cartItemId = req.params.cartItemId;

        await Cart.findByIdAndDelete(cartItemId);

        res.status(200).json({ success: true, message: 'Cart item removed successfully.' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const getCartItems = async (req, res) => {
    try {
        const userId = req.userData.userId;

        // Find all cart items for the user
        const cartItems = await Cart.find({ user: userId }).populate('product');

        // Initialize variables to store cart details
        let totalItems = 0;
        let totalPrice = 0;
        let cartDetails = [];

        // Loop through each cart item
        for (const cartItem of cartItems) {
            // Extract product details
            const { name, price } = cartItem.product;
            const quantity = cartItem.quantity;

            // Calculate total price for each item
            const itemTotalPrice = price * quantity;

            // Update total items and total price
            totalItems += quantity;
            totalPrice += itemTotalPrice;

            // Add item details to cartDetails array
            cartDetails.push({
                name,
                quantity,
                price,
                itemTotalPrice
            });
        }

        // Return cart details and total price
        res.status(200).json({ success: true, totalItems, totalPrice, cartDetails });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


// const getCartItems = async (req, res) => {
//     try {
//         const userId = req.userData.userId;

//         const cartItems = await Cart.find({ user: userId }).populate('product');

//         res.status(200).json({ success: true, data: cartItems });
//     } catch (error) {
//         res.status(500).json({ success: false, error: error.message });
//     }
// };

module.exports = { addToCart, removeCartItem, getCartItems };
