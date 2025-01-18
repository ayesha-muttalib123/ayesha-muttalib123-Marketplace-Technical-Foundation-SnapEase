
#### `/api-specs/delivery/accept-task.md`
```markdown
# Delivery - Accept Delivery Task API

## Endpoint
`PUT /api/delivery/accept`

## Purpose
Rider accepts a delivery task.

## Request Payload
```json
{
  "taskId": 1,
  "deliveryUserId": 2
}
Resp
onse

{
  "success": true,
  "message": "Task accepted successfully"
}

