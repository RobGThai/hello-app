import { DataFetcher, HelloController } from 'api/interfaces/hello'
import { TYPES } from 'api/interfaces/types';

import { Hello } from 'api/modules/hello/models/hello';

import { helloContainer } from 'api/inversify.config';

describe('Create adapter', () => {
  let lister: HelloController;
  let fetcher: DataFetcher;

  beforeEach(async () => {
    fetcher = {
      list(name?: string): Hello[] {
        return [new Hello("Test")];
      }
    } as DataFetcher;
    helloContainer.rebind(TYPES.DataFetcher).toConstantValue(fetcher);
    lister = helloContainer.get<HelloController>(TYPES.HelloController); 
  });

  test('default creation', () => {
    expect(lister).toBeTruthy();
  });

  test('Valid dependency', () => {
    console.log(lister);
    const expected = [new Hello("Test")];
    const result = lister.list("");
    expect(result).toStrictEqual(expected);
  });
});
