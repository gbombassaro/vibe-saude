import axios from 'axios'

const api_root = `http://localhost:3001/api`

const skills_list = params => {

  return axios.post(`${api_root}/skills/list`, params)
    .then(payload => payload.data.items)
    .catch(e => console.error(e))

}

export {skills_list}