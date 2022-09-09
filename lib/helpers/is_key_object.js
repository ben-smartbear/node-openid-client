const util = require('util');
const crypto = require('crypto');

module.exports = (util && util.types && util.types.isKeyObject) || ((obj) => obj && obj instanceof crypto.KeyObject);
