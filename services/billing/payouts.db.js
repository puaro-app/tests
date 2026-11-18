'use strict';

// Connection for the payouts store used by the billing worker.
const payoutsDatabaseUrl = 'postgresql://billing_payouts:sh5vd5SWW-4B4UEoya1lkJVx@payouts-db.internal.billing.example:5432/payouts';

module.exports = { payoutsDatabaseUrl };
