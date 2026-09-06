const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')

//GET todos los productos
router.get('/', productController.getProducts)

//POST crear producto
router.post('/', productController.createProduct)

//GET producto por ID
router.get('/:id', productController.getProductById)

//PUT actualizar producto
router.put('/:id', productController.updateProduct)

//DELETE eliminar producto
router.delete('/:id', productController.deleteProduct)

module.exports = router