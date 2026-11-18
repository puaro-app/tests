'use strict';

// Connection for the ledger store used by the billing worker.
const ledgerDatabaseUrl = 'postgresql://billing_ledger:VxKmQG_EEXF1ZR5pvI75vJ0i@ledger-db.internal.billing.example:5432/ledger';

module.exports = { ledgerDatabaseUrl };
