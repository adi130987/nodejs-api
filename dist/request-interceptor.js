var EtoolsXHRInterceptor = (function () {
    function EtoolsXHRInterceptor(apiConfig) {
        this.apiConfig = {};
        this.apiConfig = apiConfig;
    }
    EtoolsXHRInterceptor.prototype.getApiConfig = function () {
        return this.apiConfig;
    };
    EtoolsXHRInterceptor.prototype.interceptXhr = function () {
        console.log('Generate etools request interceptor');
        console.log('XHR Interceptor is ready to rock!');
    };
    return EtoolsXHRInterceptor;
}());
(function () {
    var apiConfig = {
        pmp: {
            host: 'http://localhost:8082',
            tokenEndpoint: '/api/jwt/get'
        },
        prp: {
            host: 'http://localhost:8082',
            tokenEndpoint: '/api/jwt/get'
        }
    };
    var etoolsXhrInterceptor = new EtoolsXHRInterceptor(apiConfig);
    console.log('Building XHR interceptor using config: ', etoolsXhrInterceptor.getApiConfig());
})();
//# sourceMappingURL=request-interceptor.js.map