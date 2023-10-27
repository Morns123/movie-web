import axios from 'axios'

const apiKey = '36eafa29deb0da5833f6af4fd2e2b717'
const baseUrl = 'https://api.themoviedb.org/3'
export const imageUrl = 'https://image.tmdb.org/t/p/original'

const apiAxios = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: apiKey,
    }
})

export default apiAxios