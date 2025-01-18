export default {
    name: 'deliveryTask',
    type: 'document',
    fields: [
      { name: 'orderId', type: 'reference', to: [{ type: 'order' }] },
      { name: 'assignedTo', type: 'reference', to: [{ type: 'user' }] },
      { name: 'status', type: 'string', options: { list: ['available', 'assigned', 'picked', 'delivered'] } },
      { name: 'deliveryFee', type: 'number', title: 'Delivery Fee' }
    ]
  };
  