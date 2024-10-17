import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listOrdersHistory(req: Request, res: Response) {
  try {
    const orders = await Order.find({
      restarted: true,
    }).populate('products.product');

    if (!orders) {
      throw new Error('Orders not found.');
    }

    res.status(200).json(orders);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
