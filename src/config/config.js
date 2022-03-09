require('dotenv/config');
module.exports = {
    development : {
        databases : {
            rest : {
                database : process.env.DB_NAME,
                username : process.env.DB_USERNAME,
                password : process.env.DB_PASSWORD,
                host     : process.env.DB_HOSTNAME.DB_HOSTNAME,
                port     : process.env.DB_PORT,
                dialect  : process.env.DB_DIALECT
            }
        }
    },
    production : {
        databases : {
            rest : {
                database : process.env.DB_NAME,
                username : process.env.DB_USERNAME,
                password : process.env.DB_PASSWORD,
                host     : process.env.DB_HOSTNAME.DB_HOSTNAME,
                port     : process.env.DB_PORT,
                dialect  : process.env.DB_DIALECT
            }
        }
    }
}