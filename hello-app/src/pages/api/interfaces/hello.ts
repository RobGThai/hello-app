import { Hello } from '../modules/hello/models/hello.js';

export interface HelloController {
    /**
     * list Hello from source
    **/
    list(name?: string): Hello[];
}

export interface DataFetcher {
    list(name?: string): Hello[];
}
