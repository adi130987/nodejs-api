import {Server, createServer, ServerRequest as Request, ServerResponse as Response} from 'http';

import {ServerConfig} from "./server-config";
import {AppRouter} from "./router";

export class AppServer {
  private server: Server;
  private config: ServerConfig;
  private appRouter: AppRouter;

  constructor(config: ServerConfig) {
    this.config = config;
    this.appRouter = new AppRouter();
  }

  start(): void  {
    this.server = createServer((req: Request, res: Response) => {
      // init server and set app router
      let router = this.appRouter.getRouter();
      router(req, res, AppServer.requestCompletedHandler(req, res));
    });

    this.server.listen(this.config.getPort(), this.config.getHostName(), () => {
      console.log(`Server running at http://${this.config.getHostName()}:${this.config.getPort()}/`);
    });
  }

  /**
   * Log any request made to this server
   * @param {"http".ServerRequest} req
   * @param {"http".ServerResponse} res
   */
  private static requestCompletedHandler(req: Request, res: Response): void {
    // log any endpoint accessed on the server
    console.log('request:', res.statusCode + ' ' + req.method + ' ' + req.url + ' completed...');
  }

}

(() => {
  const serverConfig = new ServerConfig('localhost', 8081);
  const server = new AppServer(serverConfig);
  server.start();
})();
// const JSON_FILES = [];






