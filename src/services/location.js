import Api from './api';

const BASE_URL = 'localization';

export const getLocation = ({ latitude, longitude }) => Api
  .get(`${BASE_URL}?latitude=${latitude}&longitude=${longitude}`);
