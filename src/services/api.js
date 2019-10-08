import axios from 'axios';

const API_URL = "https://hn.algolia.com/api/v1/search?query=";

const articleMapper = articles => {
    return articles.map(({ created_at, url, title }) => ({
      id: created_at,
      link: url,
      title
    }));
  };

export const getArticlesByQuery = (query = '') => {
    return axios.get(API_URL + query).then(responce => {
       return articleMapper(responce.data.hits)
    })
};

// export const getArticlesByQuery = (query = '') => 
//     axios.get(API_URL + query).then(responce => 
//        articleMapper(responce.data.hits)
//     );