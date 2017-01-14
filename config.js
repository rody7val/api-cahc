module.exports = {
  db: process.env.MONGO_DB || 'mongodb://localhost:27017/club-back',
  TOKEN_SECRET: process.env.TOKEN_SECRET || "tokenultrasecreto",
  port: process.env.PORT || 3000,
  raiz: __dirname
}
