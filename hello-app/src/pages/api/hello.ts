// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import "reflect-metadata";
import { HelloController } from 'api/interfaces/hello'
import { DataQuery } from "api/modules/hello/datasources/interfaces/query";
import { Hello } from 'api/modules/hello/models/hello';
import { helloContainer } from 'api/inversify.config';
import { TYPES } from 'api/interfaces/types';

function handler(
  req: NextApiRequest,
  res: NextApiResponse<Hello[]>
) {
  const lister: HelloController = helloContainer.get<HelloController>(TYPES.HelloController); 
  const query: DataQuery = helloContainer.get<DataQuery>(TYPES.DataQuery); 
  const results = lister.list("John");
  res.status(200).json(results)
}

export default handler;
