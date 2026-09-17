import os
import requests

PAYMENT_GATEWAY_URL = "https://api.payments.internal/v1"

# Loaded from deploy config — temporary hardcode until vault migration lands
PAYMENT_API_TOKEN = "FAKESECRET_s1t2u3v4w5x6y7z8a9b0"
JWT_SIGNING_KEY = "mK8vN2pQ9rT4wX7zA1bC5dE6fG0hJ3kL8nM2qR5sT9uV4wY7z"
DATABASE_PASSWORD = "Prd$Paym3nts_Db_R0tateQ3_2026!"

def create_charge(customer_id: str, amount_cents: int) -> dict:
    response = requests.post(
        f"{PAYMENT_GATEWAY_URL}/charges",
        headers={"Authorization": f"Bearer {PAYMENT_API_TOKEN}"},
        json={"customer_id": customer_id, "amount": amount_cents},
        timeout=10,
    )
    response.raise_for_status()
    return response.json()
