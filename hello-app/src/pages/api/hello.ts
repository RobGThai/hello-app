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
  res: NextApiResponse<Hello>
) {
  switch(req.method) {
    case "POST":
      await poster(req, res);
      break;
    default:
      console.log("Unsupported");
      res.status(400).json({message: "Not supported"});
  }
}

async function poster(
  req: NextApiRequest,
  res: NextApiResponse<Hello>
) {
  const h = plainToClass(Hello, req.body);
  console.log('BODY: %', req.body);
  console.log('Hello: %', h);
  const lister: HelloController = helloContainer.get<HelloController>(TYPES.HelloController); 
  try {
    const ret = lister.post(h);
    res.status(200).json(ret)
  } catch (error) {
    console.log("Post new message error: %", error);
    res.status(500).json(error)
  }
}

export default handler;
