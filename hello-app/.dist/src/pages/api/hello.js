import { HelloLister } from 'api/modules/hello/controllers/list.js';
import { RDSFetcher } from 'api/modules/hello/datasources/hello_rds.js';
function handler(req, res) {
    var fetcher = new RDSFetcher();
    var lister = new HelloLister(fetcher);
    var results = lister.list("John");
    res.status(200).json(results);
}
export default handler;
