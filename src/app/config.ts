function rapperObj() {
  return {
    base_url: 'http://localhost:3000/api/v2', // place your deploy url here
    basic_token: 'Basic loveonlyexistsifthefeelingismutual-dontlovesomeone-whodoesnt',
  };
}

export enum HttpMethods {
    GET = 'get',
    PUT = 'put',
    POST = 'post',
    DELETE = 'delete',
  }

export const APPCONFIG = rapperObj();
