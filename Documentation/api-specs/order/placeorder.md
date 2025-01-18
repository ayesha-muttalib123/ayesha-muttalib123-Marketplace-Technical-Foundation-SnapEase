
---

### 3. **Order APIs**

#### `/api-specs/order/place-order.md`
```markdown
# Order - Place Order API

## Endpoint
`POST /api/orders`

## Purpose
Places an order for a customer.

## Request Payload
```json
{
  "userId": "123",
  "items": [
    { "productId": 1, "quantity": 2 }
  ]
}



Response

{
  "orderId": "456",
  "status": "processing",
  "items": [
    { "productId": 1, "quantity": 2, "price": 100 }
  ]
}