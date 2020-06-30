import Api from './api';

export const getAll = () => Api.get('/events');
export const checkin = data => Api.post('/checkin', data);
