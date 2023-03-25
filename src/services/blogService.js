import * as request from './requester';

const baseUrl = "http://localhost:3030/data/blogs";

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const blogs = Object.values(result);

    return blogs;
}

export const getOne = async (blogId) => {
    const result = await request.get(`${baseUrl}/${blogId}`);

    return result;
}

export const create = async (blogData, token) => {
    const result = await request.post(baseUrl, blogData, token)

    return result;
}

export const remove = async (blogId, token) => {
    const result = await request.del(`${baseUrl}/${blogId}`, null, token);

    return result;
}


export const update = async (blogId, blogData, token) => {
    const result = await request.put(`${baseUrl}/${blogId}`, blogData, token);

    return result;
}