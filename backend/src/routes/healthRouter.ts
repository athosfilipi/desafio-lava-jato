import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: "API is active", timestamp: new Date() });
});

export default router;
