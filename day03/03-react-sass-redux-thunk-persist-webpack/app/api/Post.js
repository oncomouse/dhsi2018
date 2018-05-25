import { normalize, schema } from 'normalizr';

const POSTS_PER_PAGE = 10;
const API_URL = 'http://localhost:3000';

const user = new schema.Entity('users');

// Define your comments schema
const comment = new schema.Entity('comments');

// Define your article
export const post = new schema.Entity('posts', {
    user
    , comments: [ comment ]
});

class Api {
    static get = id => 
        fetch(`${API_URL}/posts/${id}?_embed=comments&_expand=user`)
            .then(response => response.json())
            .then(json => normalize(json, post))
            .catch(error => { throw new Error(error); });
    static post = post => 
        fetch(`${API_URL}/posts/`, {
            method: 'post'
            , body: JSON.stringify(post)
        })
            .then(response => response.json())
            .catch(error => { throw new Error(error); });
    static put = post => 
        fetch(`${API_URL}/posts/${post.id}`, {
            method: 'put'
            , body: JSON.stringify(post)
        })
            .then(response => response.json())
            .catch(error => { throw new Error(error); });
    static delete = id => 
        fetch(`${API_URL}/posts/${id}`, {
            method: 'delete'
        })
            .then(response => response.json())
            .catch(error => { throw new Error(error); });
    static getPage = num => 
        fetch(`${API_URL}/posts/?_page=${num}&_num=${POSTS_PER_PAGE}&_sort=id&_order=DESC&_embed=comments&_expand=user`)
            .then(response => response.json())
            .then(json => normalize(json, [post]))
            .catch(error => { throw new Error(error); });
};

export default Api;