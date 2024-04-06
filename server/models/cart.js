const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;













// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const cartItemSchema = new Schema({
//     productId: {
//         type: Schema.Types.ObjectId,
//         ref: 'Product',
//         required: [true, 'Product is required!'],
//         unique: true
//     },
//     quantity: {
//         type: Number,
//         required: [true, 'Quantity is required!'],
//         trim: true
//     }
// });

// const CartSchema = new Schema({
//     userId: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: [true, 'User is required!'],
//         unique: true
//     },
//     items: [cartItemSchema]
// });

// const Cart = mongoose.model('Cart', CartSchema);

// module.exports = Cart;