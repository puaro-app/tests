"""Demo module for Puaro PR annotation review — intentionally hardcoded secrets (fake)."""

# Fake generic API token — for scanner demo only (not a real credential)
PAYMENT_API_TOKEN = "puaro_demo_tok_a8f3c91e7b2d4e6f9a1c3b5d7e9f0a2b4c6d8e0f1a3b5c7d9e"

# Fake JWT signing secret — for scanner demo only
JWT_SECRET = "and0LXNlY3JldC1rZXktMjAyNGRlbW9wdWFyby1jaGVjay1ydW4="

# Fake database password embedded in connection string
DATABASE_URL = "postgres://puaro_demo:S3cretDemoPassw0rd_CheckRun2026@db.internal.example:5432/payments"

def charge_customer(amount_cents: int) -> dict:
    return {
        "api_token": PAYMENT_API_TOKEN,
        "amount": amount_cents,
    }
