import { Request, Response } from 'express';

import { Ingredient } from '../../models/Ingredient';

export async function listIngredients(req: Request, res: Response) {
  try {
    const ingredients = await Ingredient.find();

    if (!ingredients) {
      throw new Error('Ingredient not found.');
    }

    res.status(200).json(ingredients);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
