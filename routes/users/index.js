const express = require('express')
const routes = express.Router()


routes.get('/', (req, resp)=>{
  resp.status(200).send({msg: "Otra ruta"})
})

routes.get('/:id', (req, resp)=>{
  let {id} = req.params
  resp.status(200).send({msg: id})
})

routes.post('/', (req, resp)=>{
  let {body} = req
  resp.status(200).send(body)
})

module.exports = routes