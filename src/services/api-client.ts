import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd5e2e53e42c442aa8ff7be2933a904ba'
    }
})