const router = require('express').Router();
const authMiddleware = require('../middlewares/authmiddleware');
const productController = require('../controllers/product');

// Route to get all products with limited fields (name, quantity, and small-sized image)
router.get('/', productController.getAllProducts);

// Route to get a specific product by ID (including all fields)
router.get('/:id', productController.getProductById);

// Route to create a new product (accessible only to admin)
router.post('/', authMiddleware, productController.createProduct);

// Route to delete a product by ID (accessible only to admin)
router.delete('/:id', authMiddleware, productController.deleteProductById);

module.exports = router;
