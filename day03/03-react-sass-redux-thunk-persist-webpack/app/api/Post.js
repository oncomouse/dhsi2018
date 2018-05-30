import { normalize, schema } from 'normalizr';
import request from './utilities/request';

const POSTS_PER_PAGE = 10;
const API_URL = 'http://localhost:3000';

const user = new schema.Entity('users');

// Define your comments schema
const comment = new schema.Entity('comments');

// Define your article
export const post = new schema.Entity('posts', {
  user,
  comments: [comment],
});

class Api {
    static get = id =>
      request(`${API_URL}/posts/${id}?_embed=comments&_expand=user`)
        .then(json => normalize(json, post));
    static post = article =>
      request(`${API_URL}/posts/`, {
        method: 'post',
        body: JSON.stringify(article),
      });
    static put = article =>
      request(`${API_URL}/posts/${article.id}`, {
        method: 'put',
        body: JSON.stringify(article),
      });
    static delete = id =>
      request(`${API_URL}/posts/${id}`, {
        method: 'delete',
      });
    static getPage = num =>
      request(`${API_URL}/posts/?_page=${num}&_num=${POSTS_PER_PAGE}&_sort=id&_order=DESC&_embed=comments&_expand=user`)
        .then(json => normalize(json, [post]));
}

export default Api;
