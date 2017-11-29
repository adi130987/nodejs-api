"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServerConfig = /** @class */ (function () {
    function ServerConfig(hostName, port) {
        this.hostname = hostName;
        this.port = port;
    }
    ServerConfig.prototype.getHostName = function () {
        return this.hostname;
    };
    ServerConfig.prototype.getPort = function () {
        return this.port;
    };
    return ServerConfig;
}());
exports.ServerConfig = ServerConfig;
//# sourceMappingURL=server-config.js.map