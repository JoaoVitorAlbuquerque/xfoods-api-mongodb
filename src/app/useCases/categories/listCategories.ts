import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();

    if (!categories) {
      throw new Error('Category not found.');
    }

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
