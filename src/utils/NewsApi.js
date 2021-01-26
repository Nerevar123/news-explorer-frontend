import { checkError } from "./utils";
import { NEWS_URL, API_KEY } from "./constants";

const today = new Date().toISOString();
const weekAgo = new Date(Date.now() - 604800000).toISOString();

export const getNews = (keyword) => {
  return fetch(
    `${NEWS_URL}?q=${keyword}&from=${weekAgo}&to=${today}sortBy=popularity&pageSize=100&apiKey=${API_KEY}`
  ).then(checkError);
};
