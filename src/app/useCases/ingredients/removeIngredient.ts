import { Request, Response } from 'express';

import { Ingredient } from '../../models/Ingredient';

export async function removeIngredient(req: Request, res: Response) {
  try {
    const { ingredientId } = req.params;

    const ingredients = await Ingredient.findByIdAndDelete(ingredientId);

    if (!ingredients) {
      throw new Error('Ingredient not found.');
    }

    res.status(204).json(ingredients);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
