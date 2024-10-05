import axios from 'axios'

export const apiClient = axios.create(
    {
        baseURL:'http://localhost:8081'
    }
);

export const retrieveAllProducts=()=>apiClient.get('/get-all-products')