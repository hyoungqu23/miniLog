import http from 'services';
import { AxiosResponse } from 'axios';
import { DATABASE_ID } from 'config';
import { NotionPostDataType, statusFilter, slugFilter } from 'types';
import { NotionAPI } from 'notion-client';

export const getNotionPostList = async (filter: statusFilter) => {
  const response = await http.post<
    NotionPostDataType,
    AxiosResponse<NotionPostDataType>,
    statusFilter
  >(`databases/${DATABASE_ID}/query`, filter);

  return response;
};

export const getNotionPostSlugs = async (filter: statusFilter) => {
  const response = await http.post<
    NotionPostDataType,
    AxiosResponse<NotionPostDataType>,
    statusFilter
  >(`databases/${DATABASE_ID}/query`, filter);

  const slugs = response.data.results.map((result) => ({
    params: {
      slug: result.properties.slug.rich_text[0].plain_text,
    },
  }));

  return slugs;
};

export const getNotionPostPageId = async (filter: slugFilter) => {
  const response = await http.post<
    NotionPostDataType,
    AxiosResponse<NotionPostDataType>,
    slugFilter
  >(`databases/${DATABASE_ID}/query`, filter);

  return response.data.results[0].id;
};

export const getBlockMapByPageId = async (id: string) => {
  const notion = new NotionAPI();

  id = id.split('-').join('');

  const recordMap = await notion.getPage(id);

  return recordMap;
};
