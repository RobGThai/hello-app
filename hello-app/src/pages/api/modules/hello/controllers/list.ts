import { injectable, inject } from "inversify";
import { DataFetcher, DataSaver, HelloController } from 'api/interfaces/hello'
import { TYPES } from 'api/interfaces/types'
import { Hello } from '../models/hello'

@injectable()
class HelloLister implements HelloController {
    @inject(TYPES.DataFetcher) private fetcher!: DataFetcher;
    @inject(TYPES.DataSaver) private saver!: DataSaver;

    async list(name: string): Promise<Hello[]> {
        let result: Hello[] = [];
        return await this.fetcher.list(name);
    }

    async post(h: Hello): Promise<Hello> {
      return await this.saver.save(h);
    }

}

export { HelloLister };
