module.exports = {
  db: process.env.MONGO_DB || 'mongodb://localhost:27017/club-back',
  TOKEN_SECRET: process.env.TOKEN_SECRET || "tokenultrasecreto",
  WEBMAIL_EMAIL: process.env.WEBMAIL_EMAIL || "user.email@gmail.com",
  WEBMAIL_PASSWORD: process.env.WEBMAIL_PASSWORD || "user.password",
  port: process.env.PORT || 3000,
  raiz: __dirname
}
