import { injectable, inject } from 'inversify';
import { DataQuery } from './interfaces/query';
import { Hello } from '../models/hello';

@injectable()
class RDSClient implements DataQuery {

  constructor() {}

  query(message: string): Hello[] {
    return [new Hello("John")];
  }
}

export { RDSClient };
