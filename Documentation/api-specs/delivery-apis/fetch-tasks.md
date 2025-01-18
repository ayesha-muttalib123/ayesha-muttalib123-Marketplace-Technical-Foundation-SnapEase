
---

### 4. **Delivery APIs**

#### `/api-specs/delivery/fetch-tasks.md`
```markdown
# Delivery - Fetch Delivery Tasks API

## Endpoint
`GET /api/delivery/tasks`

## Purpose
Fetches delivery tasks available for riders.

## Response
```json
{
  "tasks": [
    {
      "taskId": 1,
      "status": "available",
      "orderId": 456,
      "assignedTo": null
    }
  ]
}
