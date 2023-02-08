import { Container } from "inversify";
import { TYPES } from "api/interfaces/types";
import { DataQuery } from "api/modules/hello/datasources/interfaces/query";
import { DataFetcher, HelloController } from 'api/interfaces/hello';

import { RDSClient } from 'api/modules/hello/datasources/rds_client';
import { RDSFetcher } from 'api/modules/hello/datasources/hello_rds';
import { HelloLister } from 'api/modules/hello/controllers/list';

const helloContainer = new Container();
helloContainer.bind<DataQuery>(TYPES.DataQuery).to(RDSClient);
helloContainer.bind<DataFetcher>(TYPES.DataFetcher).to(RDSFetcher);
helloContainer.bind<HelloController>(TYPES.HelloController).to(HelloLister);

export { helloContainer };
