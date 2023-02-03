import "reflect-metadata";
import {describe, expect, test} from '@jest/globals';
import { RDSFetcher } from 'api/modules/hello/datasources/hello_rds';

describe('Create adapter', () => {
  test('default creation', () => {
    const fetcher = new RDSFetcher();
    expect(fetcher).toBeTruthy();
  });
});
