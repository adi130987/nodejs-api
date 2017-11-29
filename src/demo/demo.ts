import * as request from 'request';

const serverURL = 'http://localhost:8081';

function getRouteResponse(route: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    request(serverURL + route, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}

(async () => {
  console.log('fire first request...');
  let welcomeMessage = await getRouteResponse('/');
  console.log(welcomeMessage);

  console.log('request users data...');
  let usersData = await getRouteResponse('/users');
  console.log('users: ', usersData);

})();
