const mongoose      = require('mongoose');

const User      = require('../models/user');

class UserService {

    // getAllUser = async() => {
    //     var result = {
    //         jas: 'dwadawd'
    //     }

    //     return result;
    // }

 

    

    static getUser(id) {
        User.findOne({_id: id})
            .then((user) => {
                console.log('get user ' + id);
                return user;
            })
            .catch(err => console.log(err));
    }

    static login(username,password) {

    }

}


exports.getAllUser = async() => {

    try {
        var users = await User.find({})
        return users;
    } catch(e) {
        console.log(e);
    }

    // User.find({})
    //     .then((result) => {
    //         console.log(result);
    //         return result;
    //     })
    //     .catch(err => console.log(err));

}


exports.register = async(email, username, password) => {
    var user = new User({
        email: email,
        username: username,
        password: password
    })

    user.save()
        .then(() => {
            console.log('user saved!');
            return user.email;
        })
        .catch( (err) => {
            console.log(err)
            return null;
        });

}