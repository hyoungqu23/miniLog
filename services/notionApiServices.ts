import http from 'services';
import { AxiosResponse } from 'axios';
import { DATABASE_ID } from 'config';
import { NotionPostDataType } from 'types';

type Filter = {
  filter: {
    property: string;
    status: {
      equals: string;
    };
  };
};

export const getNotionPostList = async (filter: Filter) => {
  const response = await http.post<NotionPostDataType, AxiosResponse<NotionPostDataType>, Filter>(
    `${DATABASE_ID}/query`,
    filter
  );

  return response;
};
