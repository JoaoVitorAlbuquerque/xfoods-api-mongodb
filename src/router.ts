import path from 'node:path';
import multer from 'multer';
import { Router } from 'express';

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

import { createOrder } from './app/useCases/orders/createOrder';
import { cancelOrder } from './app/useCases/orders/cancelOrder';
import { changeOrderRead } from './app/useCases/orders/changeOrderRead';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { listOrdersHistory } from './app/useCases/orders/listOrdersHistory';
import { listOrdersDashboard } from './app/useCases/orders/listOrdersDashboard';
import { changeOrderRestarted } from './app/useCases/orders/changeOrderRestarted';

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

// List orders dashboard
router.get('/orders/dashboard', listOrdersDashboard);

// List orders history
router.get('/orders/history', listOrdersHistory);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId/order-status', changeOrderStatus);

// Delete order
router.delete('/orders/:orderId', cancelOrder);

// Restarted order
router.patch('/orders/restarted', changeOrderRestarted);

// Read order
router.patch('/orders/:orderId/read', changeOrderRead);
