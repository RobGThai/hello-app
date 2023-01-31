import { Container } from "inversify";
import { TYPES } from "api/interfaces/types";
import { DataFetcher, HelloController } from 'api/interfaces/hello';
import { RDSFetcher } from 'api/modules/hello/datasources/hello_rds';
import { HelloLister } from 'api/modules/hello/controllers/list';

const helloContainer = new Container();
helloContainer.bind<DataFetcher>(TYPES.DataFetcher).to(RDSFetcher);
helloContainer.bind<HelloController>(TYPES.HelloController).to(HelloLister);

export { helloContainer };
