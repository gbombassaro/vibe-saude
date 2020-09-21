import axios from 'axios'

const api_root = `http://localhost:3001/api`

const books_list = () => {
  return axios.post(`${api_root}/books/list`)
    .then(payload => payload.data.items)
    .catch(e => console.error(e))
}
const books_create = (payload) => {
  return axios.post(`${api_root}/books/add`, payload )
    .then(payload => payload.data.items)
    .catch(e => console.error(e))
}

export {books_list, books_create}