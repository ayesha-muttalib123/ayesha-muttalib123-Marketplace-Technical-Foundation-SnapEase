
#### `/api-specs/authentication/login.md`
```markdown
# Authentication - User Login API

## Endpoint
`POST /api/auth/login`

## Purpose
Logs in a user and generates a JWT token for authentication.

## Request Payload
```json
{
  "email": "john@example.com",
  "password": "*****"
}


## Response
```json

{
  "token": "JWT_TOKEN",
  "message": "Login successful"
}