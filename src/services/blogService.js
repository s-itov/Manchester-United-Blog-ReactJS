import * as request from './requester';

const baseUrl = "http://localhost:3030/jsonstore/blog/posts/";

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const blogs = Object.values(result);

    return blogs;
}

export const getOne = async (blogId) => {
    const result = await request.get(`${baseUrl}/${blogId}`);

    return result;
}

export const create = async (blogData) => {
    const result = await request.post(baseUrl, blogData)

    return result;
}

export const remove = async (blogId) => {
    const result = await request.del(`${baseUrl}/${blogId}`);

    return result;
}

