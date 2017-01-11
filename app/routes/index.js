// Controllers
var noticeController = require('../controllers/notice_controller')
var config = require('../../config.js')

module.exports = function (express) {
    // Motor de rutas API
    var api = express.Router()

    // Documentación
    var options = { root: config.raiz + '/app/' }
    api.get('/', function (req, res){
        res.sendFile('index.html', options, function (err) {
            if (err) return res.status(500).json({
                status: 500,
                err: "Falta index.html"
            })
            console.log('Fichero index.html enviado.')
            res.status(200).end()
        })
    })

    // Notices
    api.get('/notices', noticeController.index)
    api.post('/notices', noticeController.post)

    // Restricción de rutas
    api.get('*', function (req, res) {
    	res.status(406).json({
            status: 406,
            err: 'No Aceptable'
        })
    })

    // Retornar rutas API
    return api
}
