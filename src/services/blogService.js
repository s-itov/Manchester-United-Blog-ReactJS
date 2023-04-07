import * as request from './requester';

const url= process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3030'
    : 'http://localhost:3031';

const baseUrl = `${url}/data/blogs`;

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

export const getAuthor = async (blogId) => {
      const searchQuery = encodeURIComponent(`_id="${blogId}"`);
      const relationQuery = encodeURIComponent(`author=_ownerId:users`);
      const url = `${baseUrl}?where=${searchQuery}&load=${relationQuery}`;

      const response = await request.get(url);
      const author = Object.values(response);

      return author;
};