//mocked class to get data from PostgresQL
import { injectable, inject } from "inversify";
import { TYPES } from 'api/interfaces/types'

//import { DataQuery } from "./interfaces/query";
import { DataQuery } from "api/modules/hello/datasources/interfaces/query";
import { DataFetcher } from 'api/interfaces/hello';

import { Hello } from '../models/hello';

@injectable()
class RDSFetcher implements DataFetcher {
    @inject(TYPES.DataQuery) private client!: DataQuery;

    constructor() {
        //Inject PostgresQL adapter here later.
    }

    list(name?: string): Hello[] {
        let result: Hello[] = [];
        let kw = (name === undefined) ? "": name; 

        result = this.client.query(kw);

        return result;
    }
}

export { RDSFetcher };
