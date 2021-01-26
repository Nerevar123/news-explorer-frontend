const mainUrl = "https://api.news.ner.works";
export const newsUrl = "https://nomoreparties.co/news/v2/everything";
export const apiKey = "aad9739c0a0449f3a2b4a6dfeaa6f7b5";

export const apiOptions = {
  baseUrl: mainUrl,
  headers: {
    "Content-Type": "application/json",
  },
};

export const checkError = async (res) => {
  if (res.ok) {
    return res.json();
  }
  await res
    .text()
    .then((text) => {
      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    })
    .then((text) => {
      return Promise.reject(text.message || text.error || text);
    });
};
