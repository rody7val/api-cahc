module.exports = {
  db: process.env.MONGO_DB || 'mongodb://localhost:27017/club-back',
  port: process.env.PORT || 3000,
  raiz: __dirname
}
