import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function updateCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const { icon, name } = req.body;

    const categories = await Category.findByIdAndUpdate(categoryId, { icon, name }, { new: true });

    if (!categories) {
      throw new Error('Category not found.');
    }

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
