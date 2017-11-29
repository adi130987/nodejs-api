export class ServerConfig {
  public hostname: string;
  public port: number;

  constructor(hostName: string, port: number) {
    this.hostname = hostName;
    this.port = port;
  }

  public getHostName(): string {
    return this.hostname;
  }

  public getPort(): number {
    return this.port;
  }
}
