const { connection } = require('mongoose')

const router=require('express').Router()

const additem=require('./controllers/additem')
const getItem=require('./controllers/getitem')
const editItem=require('./controllers/edititem')
const deleteItem=require('./controllers/deleteitem')

router.post('/item',additem)
router.get('/item',getItem)
router.put('/item',editItem)
router.delete('/item/:id',deleteItem)


module.exports=router;