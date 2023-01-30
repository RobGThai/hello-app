// Next API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { DataFetcher, HelloController } from 'api/interfaces/hello'
import { HelloLister } from 'api/modules/hello/controllers/list'
import { RDSFetcher } from 'api/modules/hello/datasources/hello_rds'
import { Hello } from 'api/modules/hello/models/hello';


function handler(
  req: NextApiRequest,
  res: NextApiResponse<Hello[]>
) {
  const fetcher: DataFetcher = new RDSFetcher();
  const lister: HelloController = new HelloLister(fetcher);
  const results = lister.list();
  res.status(200).json(results);
}

export default handler;
