import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/shock-dev/goodbit-posts/'
});

export default instance;
