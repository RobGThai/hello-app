import { injectable, inject } from 'inversify';
import { DataQuery } from './interfaces/query';
import { DataSaver } from 'api/interfaces/hello';

import { TYPES } from "src/pages/api/interfaces/types";
import { Hello } from "../models/hello";

@injectable()
class HelloSaver implements DataSaver {
  @inject(TYPES.DataQuery) private client!: DataQuery;

  constructor() {
  }

  async save(h: Hello): Promise<Hello> {
    return await this.client.save(h);
  }
}

export { HelloSaver };
