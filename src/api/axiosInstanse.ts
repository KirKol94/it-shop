import axios from 'axios'

const API_URL = 'http://localhost:3004/api'

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})
