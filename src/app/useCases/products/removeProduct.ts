import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function removeProduct(req: Request, res: Response) {
  try {
    const { productId } = req.params;

    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      throw new Error('Product not found.');
    }

    res.status(204).json(product);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
