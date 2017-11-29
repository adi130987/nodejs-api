class EtoolsXHRInterceptor {

  public apiConfig = {};

  constructor(apiConfig: Object) {
    this.apiConfig = apiConfig;
  }

  public getApiConfig(): Object {
    return this.apiConfig;
  }

  public interceptXhr(): void {
    console.log('Generate etools request interceptor');

    console.log('XHR Interceptor is ready to rock!')
  }
}

(() => {
  let apiConfig = {
    pmp: {
      host: 'http://localhost:8082',
      tokenEndpoint: '/api/jwt/get'
    },
    prp: {
      host: 'http://localhost:8082',
      tokenEndpoint: '/api/jwt/get'
    }
  };

  let etoolsXhrInterceptor = new EtoolsXHRInterceptor(apiConfig);
  console.log('Building XHR interceptor using config: ', etoolsXhrInterceptor.getApiConfig());
})();
