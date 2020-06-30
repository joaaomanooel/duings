import axios from 'axios';

const API_URL = 'http://5b840ba5db24a100142dcd8c.mockapi.io/api';

export default axios.create({ baseURL: API_URL, timeout: 10000 });
