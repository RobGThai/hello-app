import { Hello } from '../modules/hello/models/hello';

export interface HelloController {
    /**
     * list Hello from source
    **/
    list(name?: string): Promise<Hello[]>;

    post(h: Hello): Promise<Hello>;
}

export interface DataFetcher {
    list(name?: string): Promise<Hello[]>;
}

export interface DataSaver {
    save(h: Hello): Promise<Hello>;
}
