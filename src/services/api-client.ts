import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '588509f176254220a926e1019a778eb2'
    }
})