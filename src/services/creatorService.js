import * as request from '../services/requester'

const url= process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3030'
    : 'http://localhost:3031';

const baseUrl = `${url}/data/creators`

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const blogs = Object.values(result);

    return blogs;
}

export const create = async ({userName, email, avatarUrl, country, about}, token) => {

    const result = await request.post(baseUrl, {userName, email, avatarUrl, country, about}, token);

    return result;
}