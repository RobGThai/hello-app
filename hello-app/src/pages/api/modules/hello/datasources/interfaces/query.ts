import { Hello } from 'api/modules/hello/models/hello';

export interface DataQuery {
  query(message: string): Promise<Hello[]>;
  save(h: Hello): Promise<Hello>;
}
