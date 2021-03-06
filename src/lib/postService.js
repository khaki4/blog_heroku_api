import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

export const getPosts = () =>
  axios.get(`${BASE_URL}/posts/${API_KEY}`)
export const createPost = (value) =>
  axios.post(`${BASE_URL}/posts/${API_KEY}`, value)
