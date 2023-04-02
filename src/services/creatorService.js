import * as request from '../services/requester'

const baseUrl = 'http://localhost:3030/jsonstore/creators'

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const blogs = Object.values(result);

    return blogs;
}

export const create = async ({userName, email, avatarUrl, country, about}) => {

    const result = await request.post(baseUrl, {userName, email, avatarUrl, country, about});

    return result;
}