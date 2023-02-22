import { injectable, inject } from 'inversify';
import { DataQuery } from './interfaces/query';
import { Hello } from '../models/hello';
import { Op } from 'sequelize';
import { sequelize } from './conn';

@injectable()
class RDSClient implements DataQuery {
  constructor() {
  }

  async query(message: string): Promise<Hello[]> {
    console.log("RDSClient:query");
    const ret: Hello[] = [];

    try {
      await sequelize.authenticate();
    } catch (error) {
      console.error("Unable to connect to the database", error);
    }

    try {
      // Querying the client returns a query result promise
      // which is also an asynchronous result iterator.
      const kw = "%" + message + "%";
      const results = await Hello.findAll({
        where: {
          message: {
            [Op.like]: kw
          }
        }
         // order: [['created_at', 'DESC']], // optional: add order conditions
      });

      if(results.length === 0) {
        console.log("Empty result");
        const h = Hello.build({
          id: 0, message:"Empty result", sender:"SYS"
        });
        ret.push(h);
      } else {
        ret.push(...results);
      }
    } finally {
      console.log("Release connection");
      //await sequelize.connectionManager.releaseConnection();
    }

    return ret;
  }

  async save(h: Hello): Promise<Hello> {
    console.log("RDSClient: Save");
    return h.save()
  }
}

export { RDSClient };
