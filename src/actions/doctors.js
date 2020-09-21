import axios from 'axios'

const api_root = `http://localhost:3001/api`

const doctors_list = () => {

  return axios.post(`${api_root}/doctors/list`)
    .then(payload => payload.data.items)
    .catch(e => console.error(e))

}

export {doctors_list}