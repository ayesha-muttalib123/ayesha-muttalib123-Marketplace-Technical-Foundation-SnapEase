
---

### 2. **Product APIs**

#### `/api-specs/product/fetch-products.md`
```markdown
# Product - Fetch All Products API

## Endpoint
`GET /api/products`

## Purpose
Fetches all products available in the marketplace.

## Response
```json
{
  "products": [
    {
      "id": 1,
      "name": "Apple",
      "price": 50
    },
    {
      "id": 2,
      "name": "Orange",
      "price": 40
    }
  ]
}
