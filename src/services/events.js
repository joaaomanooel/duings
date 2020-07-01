import Api from './api';

const BASE_URL = 'events';

export const getAll = () => Api.get(BASE_URL);
export const checkin = data => Api.post(`${BASE_URL}/checkin`, data);
