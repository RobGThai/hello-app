import { DataFetcher, HelloController } from 'api/interfaces/hello'
import { TYPES } from 'api/interfaces/types';

import { Hello } from 'api/modules/hello/models/hello';

import { helloContainer } from 'api/inversify.config';
import { DataQuery } from '../../datasources/interfaces/query';
import { RDSFetcher } from '../../datasources/hello_rds';

describe('Create adapter', () => {
  let lister: HelloController;
  let fetcher: DataFetcher;
  let client: DataQuery;

  beforeEach(async () => {
    client = {
      async query(message: string): Promise<Hello[]> {
        console.log("Mocked client");
        const p = new Promise<Hello[]>((ok, err) => {
          ok([new Hello("Test")]);
        });
          
        return p;
      }
    } as DataQuery;
    // fetcher = new RDSFetcher(client)
    fetcher = {
      client: client,
      async list(name?: string): Promise<Hello[]> {
        console.log("Mocked fetcher");
        const p = new Promise<Hello[]>((res, rej) => {
          res([new Hello("Test")]);
        });
          
        return [new Hello("Test")];
      }
    } as DataFetcher;
//    helloContainer.rebind(TYPES.DataQuery).toConstantValue(client);
//    fetcher = helloContainer.get<DataFetcher>(TYPES.DataFetcher); 
    helloContainer.rebind(TYPES.DataFetcher).toConstantValue(fetcher);
    lister = helloContainer.get<HelloController>(TYPES.HelloController); 
  });

  test('default creation', () => {
    expect(lister).toBeTruthy();
  });

  test('Valid dependency', async () => {
    console.log(lister);
    const expected = [new Hello("Test")];
    const result = await lister.list("");
    expect(result).toStrictEqual(expected);
  });
});
