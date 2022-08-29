import axios from "axios"

export async function getProducts() {
    try {
        const response = await axios.get('https://6307c8ee3a2114bac76b9e60.mockapi.io/api/v1/products')
        return response.data
    }catch (error) {
        return Promise.reject(error.response)
    }
}