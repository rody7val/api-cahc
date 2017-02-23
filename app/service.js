var jwt = require('jwt-simple')
var moment = require('moment')
var config = require('../config')
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

exports.createToken = function(user) {  
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(30, "minutes").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET)
};

exports.createWebMail = function(type, to, token) {
	var _mailOptions = {};
	var _transporter = nodemailer.createTransport(smtpTransport({
		service: 'gmail',
		auth: {
			user: config.WEBMAIL_EMAIL,
			pass: config.WEBMAIL_PASSWORD
		},
		tls: { rejectUnauthorized: false }
	}));

	if (type === "FORGOT") {
		_mailOptions = {
			to: to,
			from: 'servicios@cluabhuracanchillar.com.ar',
			subject: 'Restablecimiento de contraseña',
			text: 'Está recibiendo esto porque usted (o alguien más) ha solicitado el restablecimiento de la contraseña de su cuenta.\n\n' +
				'Haga clic en el siguiente enlace o péguelo en su navegador para completar el proceso: \n\n' +
				'https://admin-cahc.herokuapp.com/reset/' + token + '\n\n' +
				'Si no lo solicitó, ignore este correo electrónico y su contraseña permanecerá sin cambios. \n\n\n' +
				'Administración - Club Atlético Huracán Chillar',
		}
	} else if (type === "RESET") {
    	_mailOptions = {
			to: to,
			from: 'servicios@cluabhuracanchillar.com.ar',
			subject: 'Tu contraseña ha sido cambiada!',
			text: 'Hola, esta es una confirmación de que la contraseña de su cuenta ' + to + ' acaba de ser cambiada.  \n\n\n' +
				'Administración - Club Atlético Huracán Chillar',
    	};
	}

	return {
		sendMail: function(cb) { _transporter.sendMail(_mailOptions, cb) }
	};
}