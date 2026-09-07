const Product = require("../models/product.model");

//Obtener todos los productos
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos" });
  }
};

//Crear un producto
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error al crear producto" });
  }
};

//Obtener producto por ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener producto" });
  }
};

//Actualizar producto
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar productos" });
  }
};

//Eliminar producto
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar productos" });
  }
};
