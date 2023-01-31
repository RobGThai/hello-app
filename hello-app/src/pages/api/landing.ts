// Next API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import "reflect-metadata";
import { DataFetcher, HelloController } from 'api/interfaces/hello'
import { Hello } from 'api/modules/hello/models/hello';
import { helloContainer } from 'api/inversify.config';
import { TYPES } from 'api/interfaces/types';

function handler(
  req: NextApiRequest,
  res: NextApiResponse<Hello[]>
) {
  const lister: HelloController = helloContainer.get<HelloController>(TYPES.HelloController); 
  const results = lister.list();
  res.status(200).json(results);
}

export default handler;
