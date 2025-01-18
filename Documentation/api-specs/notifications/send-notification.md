
---

### 6. **Notification APIs**

#### `/api-specs/notification/send-notification.md`
```markdown
# Notification - Send Notification API

## Endpoint
`POST /api/notifications/send`

## Purpose
Sends notifications to a user (e.g., order status updates).

## Request Payload
```json
{
  "userId": "123",
  "message": "Your order has been shipped!"
}
Response

{
  "success": true,
  "message": "Notification sent successfully"
}

