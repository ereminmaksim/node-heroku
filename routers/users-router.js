const express = require('express');
const {getUsers, addUser, deleteUser, getUser, updateUser} = require("../repository");
const router = express.Router();

router.use((req, res, next) => {
    let date = new Date(2011, 0, 1, 2, 3, 4, 567);
    console.log("Time a go: ", date)
    next()
})

router.get('/', async (req, res) => {
    let users = await getUsers(req.query.search)
    res.send(users)
})

router.get('/:id', async (req, res) => {
    const userId = req.params.id
    const user = await getUser(userId)

    //отфильтровать юзера!!!
    if (user) {
        res.send(user)
    }
    res.send(404)
})

router.post('/', async (req, res) => {
    let name = req.body.name
    await addUser(name)

    res.send({success: true})
})

router.put('/', async (req, res) => {
    let name = req.body.name
    let id = req.body._id
    await updateUser(id, name)

    res.send({success: true})
})


router.delete('/:id', async (req, res) => {
    const userId = req.params.id
    await deleteUser(userId)

    res.send(204) //No Content

})
module.exports = router;
