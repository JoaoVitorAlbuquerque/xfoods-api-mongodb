import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function changeOrderRestarted(req: Request, res: Response) {
  try {
    const { restarted = true } = req.body;

    await Order.updateMany({ restarted });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);

    res.status(500);
  }
}
