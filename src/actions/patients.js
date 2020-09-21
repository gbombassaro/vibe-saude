import axios from 'axios'

const api_root = `http://localhost:3001/api`

const patients_list = () => {

  return axios.post(`${api_root}/patients/list`)
    .then(payload => payload.data.items)
    .catch(e => console.error(e))

}

export {patients_list}