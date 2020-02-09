const { DB_URL } = process.ENV;
const ENV = process.env.NODE_ENV || 'development';

const { username, password } = require('./db/credentials');

const baseConfig = {
    client: 'pg',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
};

const customConfig = {
    development: {
        connection: {
            database: 'plants-diary',
            username: username,
            password: password
        }
    },
    production: {
        connection: `${DB_URL}?ssl=true`
    }
}

module.exports = { ...customConfig[ENV], ...baseConfig };