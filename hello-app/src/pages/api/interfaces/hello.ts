import { Hello } from '../modules/hello/models/hello';

export interface HelloController {
    /**
     * list Hello from source
    **/
    list(name?: string): Hello[];
}

export interface DataFetcher {
    list(name?: string): Hello[];
}
