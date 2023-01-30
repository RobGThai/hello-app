import { DataFetcher, HelloController } from 'api/interfaces/hello'
import { Hello } from '../models/hello'

export class HelloLister implements HelloController {
    constructor(private fetcher: DataFetcher) {
    }

    list(name: string): Hello[] {
        let result: Hello[] = [];

        return this.fetcher.list(name);
    }

}
