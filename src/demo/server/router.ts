import {Router} from 'express';
import {ServerRequest as Request, ServerResponse as Response} from "http";

export class AppRouter {
  private router: any;

  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  public getRouter(): any {
    return this.router;
  }

  public initRoutes() {
    // home route
    this.router.use(this.getRouteMidleware);
    this.router.get('/', this.getHome);

    // get users data route
    this.router.get('/users', this.getUsersData);
  }

  private getRouteMidleware(request: Request, response: Response, next: any): void {
    console.log('midleware executed for home route...', request.url);
    if (request.url === '/users') {
      response.statusCode = 400;
      response.setHeader('Content-Type', 'text/plain; charset=utf-8');
      response.end('You can not get users data!');
      return;
    }
    next();
  }

  private getHome(request: Request, response: Response): void {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.end('Hello! Welcome to NodeJS world :)');
  }

  private getUsersData(request: Request, response: Response): void {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    let responseData = [{id: 1, name: 'Jane Doe'},  {id: 2, name: 'John Doe'}];
    response.end(JSON.stringify(responseData));
  }




}
