'use strict';

// Connection for the invoices store used by the billing worker.
const invoicesDatabaseUrl = 'postgresql://billing_invoices:EOpSmGu5A3PWEXNhd4fr0K8k@invoices-db.internal.billing.example:5432/invoices';

module.exports = { invoicesDatabaseUrl };
