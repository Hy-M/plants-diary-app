const ENV = process.env.NODE_ENV || 'development';
const devData = require('./development-data/index');

const data = {
    development: devData
};

module.exports = data[ENV];