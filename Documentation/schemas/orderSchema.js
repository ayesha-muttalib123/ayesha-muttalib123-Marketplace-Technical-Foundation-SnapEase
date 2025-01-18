export default {
    name: 'order',
    type: 'document',
    fields: [
      { name: 'customer', type: 'reference', to: [{ type: 'user' }], title: 'Customer' },
      { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
      { name: 'totalAmount', type: 'number', title: 'Total Amount' },
      { name: 'status', type: 'string', options: { list: ['placed', 'paid', 'shipped', 'delivered'] } }
    ]
  };
  