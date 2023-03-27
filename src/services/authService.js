import * as request from './requester';

const baseUrl = 'http://localhost:3030/users'

export const login = (loginData) =>  request.post(`${baseUrl}/login`, loginData);

export const register = (data) =>  request.post(`${baseUrl}/register`, data);

export const logout = (token) => request.get(`${baseUrl}/logout`, null, token); 

export const getAuthorDetails = async (token) => request.get(`${baseUrl}/me`, null, token);

