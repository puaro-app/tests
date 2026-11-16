const { notify } = require('./slack');
const config = require('./config');

function alertOnCall(message) {
    notify(`[${config.smtpUser}] ${message}`);
}

module.exports = { alertOnCall };
