import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listOrdersDashboard(req: Request, res: Response) {
  try {
    const orders = await Order.find({
      restarted: false,
    })
    .sort({ createdAt: 1 })
    .populate('products.product');

    if (!orders) {
      throw new Error('Orders not found.');
    }

    res.status(200).json(orders);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
