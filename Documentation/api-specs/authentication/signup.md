# Authentication - User Signup API

## Endpoint
`POST /api/auth/signup`

## Purpose
Registers a user and assigns a role.

## Request Payload
```json
{
  "name": "John",
  "email": "john@example.com",
  "role": "customer"
}


Response
```json

{
  "success": true,
  "message": "User registered successfully"
}