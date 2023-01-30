import { HelloLister } from './modules/hello/controllers/list.js';
import { RDSFetcher } from './modules/hello/datasources/hello_rds.js';
function handler(req, res) {
    var fetcher = new RDSFetcher();
    var lister = new HelloLister(fetcher);
    var results = lister.list();
    res.status(200).json(results);
}
export default handler;
