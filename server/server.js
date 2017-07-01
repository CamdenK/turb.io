const express = require('express')
const http = require('http')
const url = require('url')
const WebSocket = require('ws')
const path = require('path')

const app = express()

app.use(function(req,res){
  res.send('working page')
})

const server = http.createServer(app)
const wss = new WebSocket.Server({server})

wss.on('connection', function connection(ws, req){
  const location = url.parse(req.url, true)
})

server.listen(8080, function listening(){
  console.log('listeining on ',server.address().port)
})

app.use(express.static(path.join(__dirname,'assets')))

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})
