import * as request from '../services/requester';

const baseUrl = "http://localhost:3030/data/comments";

export const getAll = async (blogId) => {
    const query = encodeURIComponent(`blogId="${blogId}"`);
    const url = `${baseUrl}?where=${query}`;

    const result = await request.get(url);

    const comments = Object.values(result);

    return comments;
};


export const create = async (blogId, comment, userName, token) => {

    const result = await request.post(baseUrl, { blogId, comment, userName}, token);

    return result;
}