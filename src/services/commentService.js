import * as request from '../services/requester';

const url= process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3030'
    : 'https://practice-server-man.onrender.com';

const baseUrl = `${url}/data/comments`;

export const getAll = async (blogId) => {
    const searchQuery = encodeURIComponent(`blogId="${blogId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);
    const url = `${baseUrl}?where=${searchQuery}&load=${relationQuery}`;

    const result = await request.get(url);

    const comments = Object.values(result);

    return comments;
};


export const create = async (blogId, comment, userName, token) => {

    
    const result = await request.post(baseUrl, { blogId, comment, userName}, token);
    
    console.log(result);

    return result;
}