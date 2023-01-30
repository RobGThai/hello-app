// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Hello } from 'api/modules/hello/models/hello'

function handler(
  req: NextApiRequest,
  res: NextApiResponse<Hello[]>
) {
  console.log(Hello);
  res.status(200).json([{"name": "Test"}])
}

export default handler;
