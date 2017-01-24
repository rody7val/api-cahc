// Controllers
var Notice = require('../controllers/notice_controller')
var Auth = require('../controllers/auth_controller')
var General = require('../controllers/general_controller')
var Session = require('../controllers/session_controller')

module.exports = function (express) {
    // Motor de rutas API
    var api = express.Router()

    // Documentación
    api.get('/', General.doc)

    // Autoload de comandos 
    api.param('noticeId', Notice.load);

    // Auth
    api.post('/auth/signup', Auth.emailSignup)
    api.post('/auth/login', Auth.emailLogin)

    // Notices
    api.get('/notices/:noticeId', Notice.one)
    api.get('/notices', Notice.all)
    api.post('/notices', Session.ensureAuthenticated, Notice.create)

    // Restricción de rutas
    api.get('*', General.restrict)

    // Retornar rutas API
    return api
}
