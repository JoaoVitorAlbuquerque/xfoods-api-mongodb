import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function softDeleteProduct(req: Request, res: Response) {
  try {
    const { productId } = req.params;
    const { deleted = true } = req.body;

    const product = await Product.findByIdAndUpdate(productId, { deleted }, { new: true });

    if (!product) {
      throw new Error('Product not found.');
    }

    res.status(200).json(product);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
