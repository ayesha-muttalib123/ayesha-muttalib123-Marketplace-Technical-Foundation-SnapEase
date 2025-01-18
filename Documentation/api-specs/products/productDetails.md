
#### `/api-specs/product/product-details.md`
```markdown
# Product - Fetch Product Details by ID API

## Endpoint
`GET /api/products/:id`

## Purpose
Fetches the details of a product by its ID.

## Request Parameters
- `id`: Product ID (Example: 1)

## Response
```json
{
  "id": 1,
  "name": "Apple",
  "price": 50
}
