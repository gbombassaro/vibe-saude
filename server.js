const express = require("express");
const cors = require('cors')
const app = express();
const port = 3000;

const server = require("http").createServer(app);
const router = express.Router()

const {includes, map} = require("lodash")
const {doctors, patients, skills} = require("./data")

const store = {doctors, patients, skills}

const orderListByName = (list) => {
  return list.sort((a, b) => 
    a.name.localeCompare(b.name))
}
const orderList = (list) => {
  return list.sort((a, b) => 
    a.localeCompare(b))
}

router.post('/doctors/list', (req, res) => {
  let {name, skills} = req.body
  let list = store.doctors
  let filtered_list = []
  if(name && name !== "") {
    map(list, (item) => {
      let item_lower = item.name ? item.name.toLowerCase() : ``
      if(item_lower.indexOf(name.toLowerCase()) !== -1)
        filtered_list.push(item)
    })
  } else if(skills && skills !== "") {
    map(list, (item) => {
      let has_skills = includes(item.skills, skills)
      if(has_skills)
        filtered_list.push(item)
    })
  } else {
    filtered_list = list
  }
  let object = {
    status: 'OK', 
    items: orderListByName(filtered_list)
  }
  res.status(200).json(object)
})

router.post('/patients/list', (req, res) => {
  let {filters} = req.body
  let object = {
    status: 'OK', 
    items: orderListByName(store.patients)
  }
  res.status(200).json(object)
})

router.post('/skills/list', (req, res) => {
  let object = {
    status: 'OK', 
    items: orderList(store.skills)
  }
  res.status(200).json(object)
})

router.get('/status', (req, res) => res.status(200).json({status: 'OK'}))

const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', router);

server.listen(port, () => console.log("server running on port:" + port));