import { injectable, inject } from 'inversify';
import { DataQuery } from './interfaces/query';
import { Hello } from '../models/hello';
import { Sequelize, Op } from 'sequelize';

@injectable()
class RDSClient implements DataQuery {
  constructor() {
  }

  async query(message: string): Promise<Hello[]> {
    console.log("RDSClient:query");
    const ret: Hello[] = [];
    const conf = {
      "host": "localhost",
      "port": 5432,
      "user": "hello",
      "password": "123password",
      "database": "hellodb"
    };
    const sequelize = new Sequelize(conf.database, conf.user, conf.password, conf) // Example for postgres

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
          id: 0, message:"Test", sender:"SYS"
        });
        ret.push(h);
      } else {
        ret.push(...results);
      }
    } finally {
      console.log("Terminate connection");
      await sequelize.close();
    }

    return ret;
  }
}

export { RDSClient };
