import { Hello } from '../models/hello.js';
var RDSFetcher = /** @class */ (function () {
    function RDSFetcher() {
        //Inject PostgresQL adapter here later.
    }
    RDSFetcher.prototype.list = function (name) {
        var result = [];
        result.push(new Hello("John Doe"));
        result.push(new Hello("Jane Doe"));
        if (name !== undefined) {
            result = result.filter(function (w) { return w.name.includes(name); });
        }
        return result;
    };
    return RDSFetcher;
}());
export { RDSFetcher };
