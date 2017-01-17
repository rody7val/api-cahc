var mongoose = require('mongoose')
var User = require('../models/user')
var service = require('../service')

/**
 * @api {post} /auth/signup Crear Usuario
 * @apiGroup Users
 * @apiVersion 0.1.0
 *
 * @apiParam {String} email Email del usuario a registrar.
 * @apiParam {String} password Contraseña elegida por el usuario.
 *
 * @apiSuccess {Number} status Código de estado HTTP.
 * @apiSuccess {String} token Firma cifrada que permite identificar un usuario.
 *
 * @apiSuccessExample Respuesta de ejemplo de exito al crear un usuario.
 * {
 *     "status": 200,
 *     "token": "eyJ0eXAiOiJKV1GUzI1NXAiOiJXAiOiJiJ9.eyJzdWIXAiOiJiOiGMTUyNzg4ZXAiOiJjBhMDQ..."
 * }
 *
 * @apiError {Number} status Código de estado HTTP.
 * @apiError {String} err Información del error.
 *
 * @apiErrorExample Respuesta de ejemplo de error al crear un usuario.
 * {
 *     "status": 500,
 *     "err": "El 'Email' es incorrecto."
 * }
 *
 */
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

/**
 * @api {post} /auth/login Iniciar Sesión
 * @apiGroup Users
 * @apiVersion 0.1.0
 *
 * @apiParam {String} email Email del usuario registrado.
 * @apiParam {String} password Contraseña del usuario registrado.
 *
 * @apiSuccess {Number} status Código de estado HTTP.
 * @apiSuccess {String} token Firma cifrada que permite identificar un usuario.
 *
 * @apiSuccessExample Respuesta de ejemplo de exito al iniciar sesión.
 * {
 *     "status": 200,
 *     "token": "eyJ0eXAiOiJKV1GUzI1NXAiOiJXAiOiJiJ9.eyJzdWIXAiOiJiOiGMTUyNzg4ZXAiOiJjBhMDQ..."
 * }
 *
 * @apiError {Number} status Código de estado HTTP.
 * @apiError {String} err Información del error.
 *
 * @apiErrorExample Respuesta de ejemplo de error al iniciar sesión.
 * {
 *     "status": 500,
 *     "err": "Email incorrecto"
 * }
 *
 */
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