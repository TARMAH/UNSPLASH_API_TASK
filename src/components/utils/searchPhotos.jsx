import { createApi } from 'unsplash-js';

const unsplash = new createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_API_KEY,
});

export const PER_PAGE = 10;

export const searchPhotos = async ({
  query,
  pageNumber,
  perPage = PER_PAGE,
}) => {
  return unsplash.search.getPhotos({
    query: query,
    page: pageNumber,
    perPage: perPage,
  });
};
