import * as request from './requester';

const url= process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3030'
    : 'http://localhost:3031';

const baseUrl = `${url}/users`;

export const login = (loginData) =>  request.post(`${baseUrl}/login`, loginData);

export const register = (data) =>  request.post(`${baseUrl}/register`, data);

export const logout = (token) => request.get(`${baseUrl}/logout`, null, token); 

export const getAuthorDetails = async (token) => request.get(`${baseUrl}/me`, null, token);

