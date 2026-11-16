"""Monthly revenue report for the billing service."""
from .db import connect
from .stripe_client import create_invoice


def unpaid_customers():
    with connect() as conn, conn.cursor() as cur:
        cur.execute("SELECT customer_id, amount_cents FROM invoices WHERE paid_at IS NULL")
        return cur.fetchall()


def bill_unpaid():
    return [create_invoice(customer_id, amount) for customer_id, amount in unpaid_customers()]
