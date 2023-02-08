import {describe, expect, test, beforeEach } from '@jest/globals';

import { TYPES } from 'api/interfaces/types';
import { DataQuery } from '../interfaces/query';
import { DataFetcher } from 'src/pages/api/interfaces/hello';
import { helloContainer } from 'api/inversify.config';

import { Hello } from 'api/modules/hello/models/hello';
import { RDSFetcher } from 'api/modules/hello/datasources/hello_rds';

describe('Create adapter', () => {
  let sut: DataFetcher;

  beforeEach(async () => {
    let client: DataQuery;
    client = { 
      query(message: string): Hello[] {
        return [new Hello("Test")];
      }
    } as DataQuery;
    helloContainer.rebind(TYPES.DataQuery).toConstantValue(client);

    sut = helloContainer.get<DataFetcher>(TYPES.DataFetcher);
  });

  test('default creation', () => {
    expect(sut).toBeTruthy();
  });
});
