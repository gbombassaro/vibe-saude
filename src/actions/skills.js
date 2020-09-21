import axios from 'axios'

const api_root = `http://localhost:3001/api`

const skills_list = () => {

  return axios.post(`${api_root}/skills/list`)
    .then(payload => payload.data.items)
    .catch(e => console.error(e))

}

export {skills_list}