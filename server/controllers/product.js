const Product = require('../models/product');

// Get all products with name, quantity, price, and imageUrl
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}, { name: 1, price: 1, imageUrl: 1, description: 1 });
        res.status(200).json({ success: true, count: products.length, data: products });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get a specific product by ID (including all fields)
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found.' });
        }
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Create a new product (accessible only to admin)
const createProduct = async (req, res) => {
    try {
        // Check if the user is an admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Unauthorized. Only admins can create products.' });
        }

        const newProduct = await Product.create(req.body);
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a product by ID (accessible only to admin)
const deleteProductById = async (req, res) => {
    try {
        // Check if the user is an admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Unauthorized. Only admins can delete products.' });
        }

        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found.' });
        }

        res.status(200).json({ success: true, data: deletedProduct });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { getAllProducts, getProductById, createProduct, deleteProductById };
