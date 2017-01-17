var mongoose = require('mongoose')
var User = require('../models/user')
var service = require('../service')

exports.emailSignup = function(req, res) {
    var email = req.body.email || ''
    var password = req.body.password || ''

    var user = new User({
        email: email,
        password: password
    })

    user.save(function(err){
        if (err) return res.status(500).json({
            status: 500, 
            err: err.errors
        })
        res.status(200).json({status: 200, token: service.createToken(user)})
    })
}

exports.emailLogin = function(req, res) {
    var email = req.body.email || ''
    var password = req.body.password || ''

    User
        .findOne({email: email})
        .select('password')
        .exec(function (err, user){
            // Error con la base de datos
            if (err) res.status(500).json({
                status: 500, 
                err: err
            })
            // Email incorrecto
            else if (!user) res.status(401).json({
                status: 401, 
                err: "Email incorrecto"
            })
            // Acceso al token
            else if (user.comparePassword(password, user.password))
                res.status(200).json({status: 200, token: service.createToken(user)})
            // Contraseña incorrecta
            else res.status(401).json({
                status: 401, 
                err: 'Contraseña incorrecta'
            })
        })
}