import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '228ed3c38ea24b97b4496dc478649590'
    }
})