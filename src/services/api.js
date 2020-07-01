import axios from 'axios';

const API_URL = 'https://duings.herokuapp.com/api';
// const API_URL = 'http://localhost:3000/api';

export default axios.create({ baseURL: API_URL, timeout: 10000 });
