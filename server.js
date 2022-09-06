const express = require('express')
const app = express()
// getting-started.js


const cors = require('cors')
app.use(cors())
app.options('*', cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// маршрутизация
const users = require('./routers/users-router')
app.use('/users', users);

// const host = 'localhost'
const port = process.env.PORT || 7542

app.get('/tasks', async (req, res) => {
    res.send("Tasks")
})

app.use((req, res) => {
    res.send(404);
});

app.listen(port, () => {
    console.log(`Server iss running on ${port}`)
})

