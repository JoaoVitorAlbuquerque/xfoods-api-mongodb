import { Request, Response } from 'express';

import { Ingredient } from '../../models/Ingredient';

export async function updateIngredient(req: Request, res: Response) {
  try {
    const { ingredientId } = req.params;
    const { icon, name } = req.body;

    const ingredients = await Ingredient.findByIdAndUpdate(ingredientId, { icon, name } , { new: true });

    if (!ingredients) {
      throw new Error('Ingredient not found.');
    }

    res.status(200).json(ingredients);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
