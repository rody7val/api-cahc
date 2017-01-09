var Notice = require('../models/notice')

/**
 * @api {get} /notices Obtener Noticias
 * @apiName getNotice
 * @apiGroup Notices
 * @apiVersion 0.1.0
 *
 * @apiSuccess {String} _id Identificador de la noticia.
 * @apiSuccess {String} title Titulo de la noticia.
 * @apiSuccess {String} content Contenido pricipal.
 * @apiSuccess {String} category Categoria asociada.
 * @apiSuccess {Boolean} status Estado.
 * @apiSuccess {String} url_img Dirección de la imagen.
 * @apiSuccess {Date} created Fecha de creación.
 *
 * @apiSuccessExample Respuesta de ejemplo con dos noticias en la Base de Datos:
 * [{
 *     "title": "Incentivando el tenis",
 *     "content": "Próximamente la nueva cancha de tenis del club tendrá profesor. En breves ...",
 *     "category": "DEPORTES",
 *     "status": false,
 *     "url_img": "https://i.imgur.com/WiaAYKn.gif",
 *     "_id": "58730624f210341390a79fd4",
 *     "created": "2017-01-19T02:31:13.000Z"
 * },
 *     "title": "Campeonato de Bochas",
 *     "content": "El trío de bochas del Club Atlético Huracán de Chillar está participando del ...",
 *     "category": "DEPORTES",
 *     "status": true,
 *     "url_img": "https://i.imgur.com/WiaAYKn.gif",
 *     "_id": "58730624f210341390a79fd5",
 *     "created": "2017-01-09T02:31:13.000Z"
 * }]
 */
exports.index = function (req, res) {
	Notice.find({})
	.exec(function (err, notices) {
		res.json(notices)
	})
}
/**
 * @api {post} /notices Crear Noticia
 * @apiName postNotice
 * @apiGroup Notices
 * @apiVersion 0.1.0
 *
 * @apiParam {String} _id Identificador de la noticia.
 * @apiParam {String} title Titulo de la noticia.
 * @apiParam {String} content Contenido pricipal.
 * @apiParam {String} category Categoria asociada.
 * @apiParam {Boolean} status Estado.
 * @apiParam {String} url_img Dirección de la imagen.
 * @apiParam {Date} created Fecha de creación.
 *
 * @apiSuccessExample Respuesta de ejemplo al crear una noticia en la Base de Datos:
 * {
 *     "title": "Incentivando el tenis",
 *     "content": "Próximamente la nueva cancha de tenis del club tendrá profesor. En breves ...",
 *     "category": "DEPORTES",
 *     "status": false,
 *     "url_img": "https://i.imgur.com/WiaAYKn.gif",
 *     "_id": "58730624f210341390a79fd4",
 *     "created": "2017-01-19T02:31:13.000Z"
 * }
 */
exports.post = function (req, res) {
	var notice = new Notice(req.body.notice)
	
	notice
	.save(function (err, notice) {
		if (err) return res.json(err)
		res.json(notice)
	})
}