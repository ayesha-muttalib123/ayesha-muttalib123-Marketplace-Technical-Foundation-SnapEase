
#### `/api-specs/crowdsourcing/accept-crowdsourced-task.md`
```markdown
# Crowdsourcing - Accept Task API

## Endpoint
`POST /api/crowdsourcing/accept`

## Purpose
A user accepts a crowdsourced delivery task.

## Request Payload
```json
{
  "taskId": 123
}
Response

{
  "success": true,
  "message": "Crowdsourced task accepted successfully"
}