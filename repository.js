const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect(process.env.MONGODB_URL,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
}
main().catch(err => console.log(err));

const usersSchema = new mongoose.Schema({name: String});
const MyUsers = mongoose.model('MyUsers', usersSchema);

const getUsers = (search) => {
    if (!search) {
        return MyUsers.find()
    }
    return MyUsers.find({name: new RegExp(search)})
}

const getUser = (userId) => {
        return MyUsers.find({_id: userId})
}

const updateUser = (id, name) => {

        return MyUsers.update({ _id: id }, { name: name });
}


const addUser = async (name) => {

    const userNumber1 = new MyUsers({name});
    return userNumber1.save()
}

const deleteUser = async (id) => {
    return MyUsers.deleteOne({_id: id})
}


module.exports.getUsers = getUsers;
module.exports.addUser = addUser;
module.exports.deleteUser = deleteUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;

