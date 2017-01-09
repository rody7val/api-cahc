// Controllers
var noticeController = require('../controllers/notice_controller')

module.exports = function (express) {
    // Motor de rutas API
    var api = express.Router()

    // Notices
    api.get('/notices', noticeController.index)
    api.post('/notices', noticeController.post)

    api.get('*', function (req, res) {
    	res.status(406).json({err: 'No Aceptable'})
    })

    // Retornar rutas API.
    return api
}
