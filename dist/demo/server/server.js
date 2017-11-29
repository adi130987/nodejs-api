"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var server_config_1 = require("./server-config");
var router_1 = require("./router");
var AppServer = /** @class */ (function () {
    function AppServer(config) {
        this.config = config;
        this.appRouter = new router_1.AppRouter();
    }
    AppServer.prototype.start = function () {
        var _this = this;
        this.server = http_1.createServer(function (req, res) {
            // init server and set app router
            var router = _this.appRouter.getRouter();
            router(req, res, AppServer.requestCompletedHandler(req, res));
        });
        this.server.listen(this.config.getPort(), this.config.getHostName(), function () {
            console.log("Server running at http://" + _this.config.getHostName() + ":" + _this.config.getPort() + "/");
        });
    };
    /**
     * Log any request made to this server
     * @param {"http".ServerRequest} req
     * @param {"http".ServerResponse} res
     */
    AppServer.requestCompletedHandler = function (req, res) {
        // log any endpoint accessed on the server
        console.log('request:', res.statusCode + ' ' + req.method + ' ' + req.url + ' completed...');
    };
    return AppServer;
}());
exports.AppServer = AppServer;
(function () {
    var serverConfig = new server_config_1.ServerConfig('localhost', 8081);
    var server = new AppServer(serverConfig);
    server.start();
})();
// const JSON_FILES = [];
//# sourceMappingURL=server.js.map