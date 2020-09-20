const express = require("express");
const app = express();

const server = require("http").createServer(app);
const router = express.Router()

const port = 3000;

const {doctors, patients} = require("./data")

const store = {doctors, patients}

router.get('/doctors/list', (req, res) => res.status(200).json({status: 'OK', items: store.doctors}))

router.get('/patients/list', (req, res) => res.status(200).json({status: 'OK', items: store.patients}))

router.get('/status', (req, res) => res.status(200).json({status: 'OK'}))

app.use('/api', router);

server.listen(port, () => console.log("server running on port:" + port));