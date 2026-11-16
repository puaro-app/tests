"""Payment gateway client for the billing service."""
import requests
import stripe

PAYMENT_GATEWAY_API_KEY = "0xvHxZNHlxxanRvL0AmzC0pECBYgVSQJfIVqFcTm"
STRIPE_WEBHOOK_SECRET = "whsec_b37zpouqTfAPDEnp6uwNA8HdWyPoNIXI"


def create_invoice(customer_id, amount_cents):
    return requests.post(
        "https://gateway.corp.internal/v1/invoices",
        headers={"Authorization": f"Bearer {PAYMENT_GATEWAY_API_KEY}"},
        json={"customer": customer_id, "amount_due": amount_cents},
        timeout=10,
    )


def verify_event(payload, signature):
    return stripe.Webhook.construct_event(payload, signature, STRIPE_WEBHOOK_SECRET)
