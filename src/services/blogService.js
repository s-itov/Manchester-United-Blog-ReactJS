import * as request from './requester';

const baseUrl = "http://localhost:3030/jsonstore/blog/posts/";

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const blogs = Object.values(result);

    return blogs;
}

export const create = async (blogData) => {
    const result = await request.post(baseUrl, blogData)

    console.log(result);

    return result;
}