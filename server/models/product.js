const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        trim: true
    },
    quantity: {
        type: Number,
        required: [true, 'Product quantity must be provided']
    },
    category: {
        type: String,
        enum: ['Food', 'Object'],
        required: [true, 'Category is required!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!']
    },
    // Common fields for all products
    description: {
        type: String,
        required: [true, 'Description is required!'],
        trim: true
    },
    // Image: {
    //     data: Buffer,  // Binary image data
    //     contentType: String  // MIME type of the image
    // },    
    // available: {
    //     type: Boolean,
    //     default: true
    // }
    // Specific fields for food products
    weight: {
        type: Number,
        required: function() {
            return this.category === 'Food';
        }
    },
    // Specific fields for object products
    color: {
        type: String,
        required: function() {
            return this.category === 'Object';
        }
    },
    imageUrl: {
       type: String // URL of the product image
    } 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;








// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const productSchema = new Schema({
//     name: {
//         type: String,
//         required: [true, 'Name is required!'],
//         trim: true
//     },
//     quantity: {
//         type: Number,
//         required: [true, 'Product quantity must be provided']
//     },
//     category: {     //drop down se category
//         type: Schema.Types.ObjectId,
//         ref: 'Category',
//         required: [true, 'Category is required!']
//     },
//     price: {
//         type: Number,
//         required: [true, 'Price is required!'],
//         trim: true
//     },
//     description: {
//         type: String,
//         required: [true, 'Description is required!'],
//         trim: true
//     },
//     Image: {
//         data: Buffer,  // Binary image data
//         contentType: String  // MIME type of the image
//     },    
//     // available: {
//     //     type: Boolean,
//     //     default: true
//     // }
//     });

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;