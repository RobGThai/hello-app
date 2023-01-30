var HelloLister = /** @class */ (function () {
    function HelloLister(fetcher) {
        this.fetcher = fetcher;
    }
    HelloLister.prototype.list = function (name) {
        var result = [];
        return this.fetcher.list(name);
    };
    return HelloLister;
}());
export { HelloLister };
