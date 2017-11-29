"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AppRouter = /** @class */ (function () {
    function AppRouter() {
        this.router = express_1.Router();
        this.initRoutes();
    }
    AppRouter.prototype.getRouter = function () {
        return this.router;
    };
    AppRouter.prototype.initRoutes = function () {
        // home route
        this.router.use(this.getRouteMidleware);
        this.router.get('/', this.getHome);
        // get users data route
        this.router.get('/users', this.getUsersData);
    };
    AppRouter.prototype.getRouteMidleware = function (request, response, next) {
        console.log('midleware executed for home route...', request.url);
        if (request.url === '/users') {
            response.statusCode = 400;
            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
            response.end('You can not get users data!');
            return;
        }
        next();
    };
    AppRouter.prototype.getHome = function (request, response) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain; charset=utf-8');
        response.end('Hello! Welcome to NodeJS world :)');
    };
    AppRouter.prototype.getUsersData = function (request, response) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        var responseData = [{ id: 1, name: 'Jane Doe' }, { id: 2, name: 'John Doe' }];
        response.end(JSON.stringify(responseData));
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
//# sourceMappingURL=router.js.map