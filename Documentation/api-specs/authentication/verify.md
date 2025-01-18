
#### `/api-specs/authentication/verify.md`
```markdown
# Authentication - Verify Token API

## Endpoint
`GET /api/auth/verify`

## Purpose
Verifies the JWT token and fetches user details.

## Request Headers
- `Authorization: Bearer JWT_TOKEN`

## Response
```json
{
  "valid": true,
  "user": {
    "id": "123",
    "role": "vendor"
  }
}
