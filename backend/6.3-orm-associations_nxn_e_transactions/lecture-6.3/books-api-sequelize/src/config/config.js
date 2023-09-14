
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME_DEV ,
    host: process.env.DB_HOST ,
    port: 3306,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST ,
    port: 3306,
    dialect: process.env.DB_DIALECT ,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_PROD ,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: process.env.DB_DIALECT,
  },
};