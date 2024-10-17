import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();

    if (!products) {
      throw new Error('Products not found.');
    }

    res.status(200).json(products);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
