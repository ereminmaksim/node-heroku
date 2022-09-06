// const baseURL = 'https://polar-beach-73696.herokuapp.com/' //4jsj4Q28TV8TQd1U
const mongoose = require('mongoose');

const express = require('express')
const app = express()

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

// const main = async () => {
//     await mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://eremin-server-aws:4jsj4Q28TV8TQd1U@node-server-cluster.xdfgqyq.mongodb.net/TEST?retryWrites=true&w=majority');
// }


app.listen(port, async () => {
    // await main().catch(err => console.log(err));

    console.log(`Server iss running on ${port}`)
})

