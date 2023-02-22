// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import "reflect-metadata";
import { HelloController } from 'api/interfaces/hello'
import { DataQuery } from "api/modules/hello/datasources/interfaces/query";
import { Hello } from 'api/modules/hello/models/hello';
import { helloContainer } from 'api/inversify.config';
import { TYPES } from 'api/interfaces/types';
import { plainToClass } from 'class-transformer';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Hello[]>
) {
  switch(req.method) {
    case "GET":
      await getter(req, res);
      break;
    default:
      console.log("Unsupported");
      res.status(400).json({message: "Not supported"});
  }
}

async function getter(
  req: NextApiRequest,
  res: NextApiResponse<Hello[]>
) {
  const lister: HelloController = helloContainer.get<HelloController>(TYPES.HelloController); 
  const query: DataQuery = helloContainer.get<DataQuery>(TYPES.DataQuery); 

  const { kw } = req.query;

  const results = await lister.list(kw);
  res.status(200).json(results)
}


export default handler;
