
#### `/api-specs/order/order-details.md`
```markdown
# Order - Fetch Order Details API

## Endpoint
`GET /api/orders/:id`

## Purpose
Fetches the details of a specific order by its ID.

## Request Parameters
- `id`: Order ID (Example: 456)

## Response
```json
{
  "orderId": "456",
  "status": "delivered",
  "items": [
    { "productId": 1, "quantity": 2, "price": 100 }
  ]
}
