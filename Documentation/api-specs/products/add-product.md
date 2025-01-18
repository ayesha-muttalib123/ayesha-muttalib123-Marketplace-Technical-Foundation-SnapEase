
#### `/api-specs/product/add-product.md`
```markdown
# Product - Add New Product API (Vendor Only)

## Endpoint
`POST /api/products`

## Purpose
Adds a new product to the marketplace.

## Request Payload
```json
{
  "name": "Mango",
  "price": 60
}


Response

{
  "success": true,
  "message": "Product added successfully"
}