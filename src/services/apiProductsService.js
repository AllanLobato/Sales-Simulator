import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export async function getProducts() {
    try {
        const response = await api.get('/products')
        return response.data
    }catch (error) {
        return Promise.reject(error.response)
    }
}
