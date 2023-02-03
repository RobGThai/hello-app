import { injectable, inject } from "inversify";
import { DataFetcher, HelloController } from 'api/interfaces/hello'
import { TYPES } from 'api/interfaces/types'
import { Hello } from '../models/hello'

@injectable()
class HelloLister implements HelloController {
    @inject(TYPES.DataFetcher) private fetcher!: DataFetcher;

    list(name: string): Hello[] {
        let result: Hello[] = [];

        return this.fetcher.list(name);
    }

}

export { HelloLister };
