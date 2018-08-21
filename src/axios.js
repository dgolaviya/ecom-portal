import axios from 'axios';

const instance = axios.create({
    // To Do : add base url of server.
    baseURL: 'http://104.211.226.99:8080/ecommseller/v1.0',
    headers: {
        Authorization: 'Basic ZWNvbW0tY2xpZW50OmVjb21tLXNlY3JldA==',
        Accept: 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': '*'
    }
});

// instance.interceptors.request.use((request) => {
//     console.log('Request to API method %O', request);
//     return request;
// }, (error) => Promise.reject(error));

// instance.interceptors.response.use((response) => {
//     console.log('Api call response ... %O', response);
//     return response;
// }, (error) => {
//     console.log('Api call error ... %O', error);
//     return Promise.reject(error);
// });

export default instance;
