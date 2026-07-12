import { Router } from 'express';
import { Leaderboard } from '../models/leaderboard';

const router = Router();

router.get('/', async (_req, res) => {
  const entries = await Leaderboard.find().lean();
  res.json({ message: 'Leaderboard endpoint', entries });
});

export default router;
