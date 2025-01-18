
---

### 5. **Crowdsourcing APIs**

#### `/api-specs/crowdsourcing/fetch-crowdsourced-tasks.md`
```markdown
# Crowdsourcing - Fetch Available Tasks API

## Endpoint
`GET /api/crowdsourcing/tasks`

## Purpose
Fetches available crowdsourced delivery tasks based on the user's location.

## Request Parameters
- `latitude`: User's latitude
- `longitude`: User's longitude

## Response
```json
{
  "tasks": [
    {
      "taskId": 123,
      "status": "available",
      "orderId": 456,
      "assignedTo": null
    }
  ]
}
