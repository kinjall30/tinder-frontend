import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backendkinjal.herokuapp.com/'
})

export default instance;