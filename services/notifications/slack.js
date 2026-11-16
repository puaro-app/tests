const https = require('https');

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

function notify(text) {
    const body = JSON.stringify({ text });
    const request = https.request(SLACK_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' } });
    request.end(body);
}

module.exports = { notify };
