export default {
    name: 'crowdsourcedDelivery',
    type: 'document',
    fields: [
      { name: 'taskId', type: 'string', title: 'Task ID' },
      { name: 'status', type: 'string', title: 'Status', options: { list: ['pending', 'accepted', 'escalated', 'completed'] } },
      { name: 'assignedTo', type: 'reference', to: [{ type: 'user' }], title: 'Assigned To' },
      { name: 'escalationTime', type: 'datetime', title: 'Escalation Time' },
      { name: 'deliveryFee', type: 'number', title: 'Delivery Fee' }
    ]
  };
  