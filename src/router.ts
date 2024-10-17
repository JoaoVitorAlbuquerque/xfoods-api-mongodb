import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { updateCategory } from './app/useCases/categories/updateCategory';
import { removeCategory } from './app/useCases/categories/removeCategory';

import { listIngredients } from './app/useCases/ingredients/listIngredients';
import { createIngredient } from './app/useCases/ingredients/createIngredient';
import { updateIngredient } from './app/useCases/ingredients/updateIngredient';
import { removeIngredient } from './app/useCases/ingredients/removeIngredient';

import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { updateProduct } from './app/useCases/products/updateProduct';
import { removeProduct } from './app/useCases/products/removeProduct';
import { softDeleteProduct } from './app/useCases/products/softDeleteProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';

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
router.delete('/ingredients/:ingredientId', removeIngredient);

// ##

// List Products
router.get('/products', listProducts);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// Create Product
router.post('/products', upload.single('image'), createProduct);

// Update Product
router.put('/products/:productId', updateProduct);

// Delete Product
router.delete('/products/:productId', removeProduct);

// Soft delete
router.patch('/products/:productId/soft-delete', softDeleteProduct);

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
