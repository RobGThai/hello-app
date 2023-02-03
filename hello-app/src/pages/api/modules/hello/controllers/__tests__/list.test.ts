import {describe, expect, test} from '@jest/globals';
import { error } from "console";
import { beforeEach } from "node:test";

import { DataFetcher, HelloController } from 'api/interfaces/hello'
import { TYPES } from 'api/interfaces/types';

import { Hello } from 'api/modules/hello/models/hello';
import { HelloLister } from 'api/modules/hello/controllers/list';
import { helloContainer } from 'api/inversify.config';

describe('Create adapter', () => {
  let lister: HelloController;
  let fetcher: DataFetcher;

  beforeEach(async () => {
    fetcher = {
      list(name?: string): Hello[] {
        return [];
      }
    } as DataFetcher;
    helloContainer.rebind(TYPES.DataFetcher).toConstantValue(fetcher);
    lister = helloContainer.get<HelloController>(TYPES.HelloController); 
  });

  test('default creation', () => {
    expect(lister).toBeTruthy();
  });

  test('Valid dependency', () => {
    error(lister);
    //const expected = [new Hello("John Doe"), new Hello("Jane Doe")];
    //const result = lister.list("");
    //expect(result).toBe(expected);
  });
});
