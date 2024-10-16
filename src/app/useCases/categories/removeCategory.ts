import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function removeCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const category = await Category.findByIdAndDelete(categoryId);

    if (!category) {
      throw new Error('Category not found.');
    }

    res.status(204).json(category);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
