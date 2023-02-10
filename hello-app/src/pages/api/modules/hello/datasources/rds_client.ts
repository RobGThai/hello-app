import { injectable, inject } from 'inversify';
import { DataQuery } from './interfaces/query';
import { Hello } from '../models/hello';
import { Client } from 'ts-postgres';

@injectable()
class RDSClient implements DataQuery {
  constructor() {
  }

  async query(message: string): Promise<Hello[]> {
    console.log("RDSClient:query");
    const pClient = new Client();
    await pClient.connect();
    return [new Hello("John")];
  }
}

export { RDSClient };
