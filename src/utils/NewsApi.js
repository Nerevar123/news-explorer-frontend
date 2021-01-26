import { newsUrl, apiKey, checkError } from "./utils";

let today = new Date().toISOString();
let weekAgo = new Date(Date.now() - 604800000).toISOString();

export const getNews = (keyword) => {
  return fetch(
    `${newsUrl}?q=${keyword}&from=${weekAgo}&to=${today}sortBy=popularity&pageSize=100&apiKey=${apiKey}`
  ).then(checkError);
};
