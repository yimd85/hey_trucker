//key.js figure out which set of credentials to return

if (process.env.NODE_ENV === 'production') {
    //we are in production - return the production set of keys
    module.exports = require('./prod');

} else {
    module.exports = require('./dev');
}