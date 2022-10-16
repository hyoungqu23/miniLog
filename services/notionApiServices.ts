import http from 'services';
import { DATABASE_ID } from 'config';

export const getNotionPostList = async () => {
  const response = await http.post(`${DATABASE_ID}/query`);

  return response;
};
