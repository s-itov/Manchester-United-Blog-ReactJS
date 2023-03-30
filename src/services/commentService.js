import * as request from '../services/requester';

const baseUrl = "http://localhost:3030/data/comments";

export const getAll = async (blogId) => {
    const searchQuery = encodeURIComponent(`blogId="${blogId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);
    const url = `${baseUrl}?where=${searchQuery}&load=${relationQuery}`;

    const result = await request.get(url);

    const comments = Object.values(result);

    return comments;
};


export const create = async (blogId, comment, token) => {

    const result = await request.post(baseUrl, { blogId, comment}, token);

    return result;
}