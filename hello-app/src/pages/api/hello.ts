// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { HelloLister } from './modules/hello/controllers/list.ts'


function handler(
  req: NextApiRequest,
  res: NextApiResponse<Hello[]>
) {

    console.log(HelloLister)
  const lister = new HelloLister();
  const results = lister.list("John");
  res.status(200).json(results)
}

export default handler;
