const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./models/todo')
const app = express()
app.use(cors())
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from Vite
mongoose.connect('mongodb://localhost:27017/todo')

app.get('/get', (req,res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    console.log('Received data:', req.body); // Log the received data
    const task = req.body.task;
    TodoModel.create({ task: task })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) =>{
    const {id} = parmas;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
;})

app.listen(3001, () => {
    console.log("Server is running ")
})