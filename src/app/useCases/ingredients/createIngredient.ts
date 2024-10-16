import { Request, Response } from 'express';

import { Ingredient } from '../../models/Ingredient';

export async function createIngredient(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    if (!name) {
      throw new Error('Name is required.');
    }

    if (!icon) {
      throw new Error('Icon is required.');
    }

    const ingredient = await Ingredient.create({ icon, name });

    res.status(201).json(ingredient);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
