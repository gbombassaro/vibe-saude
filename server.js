const express = require("express");
const cors = require('cors')
const app = express();
const port = 3001;

const server = require("http").createServer(app);
const router = express.Router()

const {findIndex, includes, map, remove} = require("lodash")
const {books, doctors, patients, skills} = require("./data")

const store = {books, doctors, patients, skills}

const orderListByName = (list) => {
  return list.sort((a, b) => 
    a.name.localeCompare(b.name))
}
const orderList = (list) => {
  return list.sort((a, b) => 
    a.localeCompare(b))
}

router.post('/books/add', (req, res) => {
  let book = req.body
  store.books.push(book)
  let object = {
    status: 'OK', 
    items: orderListByName(store.books)
  }
  res.status(200).json(object)
})
router.post('/books/list', (req, res) => {
  let {name, patient} = req.body
  let list = store.books
  let filtered_list = []
  let is_filtered = false
  if(name && name !== "") {
    map(list, (item) => {
      let item_lower = item.name ? item.name.toLowerCase() : ``
      if(item_lower.indexOf(name.toLowerCase()) !== -1)
        filtered_list.push(item)
    })
    list = filtered_list
    is_filtered = true
  }
  let object = {
    status: 'OK', 
    items: orderListByName(list)
  }
  res.status(200).json(object)
})
router.post('/books/remove', (req, res) => {
  let book = req.body
  remove(store.books, (book))
  let object = {
    status: 'OK', 
    items: orderListByName(store.books)
  }
  res.status(200).json(object)
})
router.post('/books/update', (req, res) => {
  let book = req.body
  let index = findIndex(store.books, {name: book.name, date: book.date})
  store.books.splice(index, 1, book);
  let object = {
    status: 'OK', 
    items: orderListByName(store.books)
  }
  res.status(200).json(object)
})
router.post('/doctors/list', (req, res) => {
  let {name, skills} = req.body
  let list = store.doctors
  let filtered_list = []
  let is_filtered = false
  if(name && name !== "") {
    map(list, (item) => {
      let item_lower = item.name ? item.name.toLowerCase() : ``
      if(item_lower.indexOf(name.toLowerCase()) !== -1)
        filtered_list.push(item)
    })
    list = filtered_list
    is_filtered = true
  }
  if(skills && skills !== "") {
    filtered_list = []
    map(list, (item) => {
      let has_skills = includes(item.skills, skills)
      if(has_skills)
        filtered_list.push(item)
    })
    list = filtered_list
    is_filtered = true
  }
  if(!is_filtered) {
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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  next();
});
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', router);

server.listen(port, () => console.log("server running on port:" + port));