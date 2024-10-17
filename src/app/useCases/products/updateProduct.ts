import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function updateProduct(req: Request, res: Response) {
  try {
    const { productId } = req.params;
    const { name, description, price, category, ingredients } = req.body;

    const imagePath = req.file?.filename;

    const product = await Product.findByIdAndUpdate(productId, {
      name,
      description,
      imagePath,
      price,
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    }, { new: true });

    res.status(200).json(product);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
