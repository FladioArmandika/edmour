// import { Router,Request,Response } from "express";

const express   = require('express');
const route    = express.Router();

const UserService   = require('../services/user');

const User = require('../models/user')



exports.getAllUser = async(req, res, next) => {
    UserService.getAllUser()
    .then((users) => {
        console.log(users);
        return res.send(users);
    })
    .catch(err => console.log(err))
}

exports.register = async(req, res, next) => {
    var {email,password,username} = req.body;

    var status = UserService.register(email,username,password);

    if(status === null) {
        res.json({
            msg: 'register failed'
        });
    } else {
        res.json(status);
    }
}