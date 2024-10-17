import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function changeOrderRead(req: Request, res: Response) {
  try {
    const { orderId } = req.params;

    await Order.findByIdAndUpdate(orderId, { read: true });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
