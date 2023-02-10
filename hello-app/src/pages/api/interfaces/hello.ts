import { Hello } from '../modules/hello/models/hello';

export interface HelloController {
    /**
     * list Hello from source
    **/
    list(name?: string): Promise<Hello[]>;
}

export interface DataFetcher {
    list(name?: string): Promise<Hello[]>;
}
