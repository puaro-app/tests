"""Database access for the billing service."""
import psycopg2

DATABASE_URL = "postgresql://billing_app:4vW1C2giPhRUZlRltWwH@pg-billing-01.corp.internal:5432/billing"


def connect():
    return psycopg2.connect(DATABASE_URL)
