import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { listIngredients } from './app/useCases/ingredients/listIngredients';
import { createIngredient } from './app/useCases/ingredients/createIngredient';
import { updateIngredient } from './app/useCases/ingredients/updateIngredient';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { updateCategory } from './app/useCases/categories/updateCategory';
import { removeCategory } from './app/useCases/categories/removeCategory';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List Categories
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategory);

// Update Category
router.put('/categories/:categoryId', updateCategory);

// Delete Category
router.delete('/categories/:categoryId', removeCategory);

// ##

// List ingredients
router.get('/ingredients', listIngredients);

// Create ingredient
router.post('/ingredients', createIngredient);

// Update ingredient
router.put('/ingredients/:ingredientId', updateIngredient);

// Delete ingredient /* Talvez inserir o método PATCH */
router.delete('/ingredients/:ingredientId', (req, res) => {
  res.send('Ok');
});

// ##

// List Products
router.get('/products', listProducts);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// Create Product
router.post('/products', upload.single('image'), createProduct);

// Update Product
router.put('/products/:productId', (req, res) => {
  res.send('Ok');
});

// Delete Product
router.delete('/products/:productId', (req, res) => {
  res.send('Ok');
});

// ##

// List orders
router.get('/orders', (req, res) => {
  res.send('Ok');
});

// Create order
router.post('/orders', (req, res) => {
  res.send('Ok');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('Ok');
});

// Delete order
router.delete('/orders/:orderId', (req, res) => {
  res.send('Ok');
});

// Restarted order
router.patch('/orders/:orderId', (req, res) => {
  res.send('Ok');
});

// Read order
router.patch('/orders/:orderId', (req, res) => {
  res.send('Ok');
});
