'use strict';

const crypto = require('crypto');

const WEBHOOK_SIGNING_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
const TOLERANCE_SECONDS = 300;

function expectedSignature(timestamp, rawBody) {
    return crypto.createHmac('sha256', WEBHOOK_SIGNING_SECRET).update(`${timestamp}.${rawBody}`).digest('hex');
}

function verifyWebhook(header, rawBody, now = Date.now()) {
    const parts = Object.fromEntries(String(header || '').split(',').map((item) => item.split('=')));
    const timestamp = Number(parts.t);
    if (!Number.isFinite(timestamp) || Math.abs(now / 1000 - timestamp) > TOLERANCE_SECONDS) return false;
    const expected = Buffer.from(expectedSignature(timestamp, rawBody));
    const given = Buffer.from(String(parts.v1 || ''));
    return expected.length === given.length && crypto.timingSafeEqual(expected, given);
}

module.exports = { verifyWebhook };
