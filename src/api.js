import axios from 'axios'

const api = axios.create({
baseURL: 'https://fakerapi.it/api/v1/users'
});

export default api;