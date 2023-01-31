//mocked class to get data from PostgresQL
import { injectable, inject } from "inversify";
import { DataFetcher } from 'api/interfaces/hello';
import { Hello } from '../models/hello';


@injectable()
class RDSFetcher implements DataFetcher {
    constructor() {
        //Inject PostgresQL adapter here later.
    }

    list(name?: string): Hello[] {
        let result: Hello[] = []

        result.push(new Hello("John Doe"))
        result.push(new Hello("Jane Doe"))

        if(name !== undefined) {
            result = result.filter(w => w.name.includes(name))
        }

        return result
    }
}

export { RDSFetcher };
