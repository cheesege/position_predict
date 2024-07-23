import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const score = req.body.score;
  const apcs = req.body.apcs;
  const year = req.body.year;
  const range = req.body.range;

  res.status(200).json({});
}