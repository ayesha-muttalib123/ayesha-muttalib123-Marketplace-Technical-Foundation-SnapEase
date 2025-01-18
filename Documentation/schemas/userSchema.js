export default {
    name: 'user',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'email', type: 'string', title: 'Email' },
      { 
        name: 'role', 
        type: 'string', 
        title: 'Role',
        options: { list: ['customer', 'vendor', 'delivery', 'admin', 'crowdsourcedDeliverer'] } 
      },
      { 
        name: 'isAvailable', 
        type: 'boolean', 
        title: 'Available for Crowdsourced Delivery',
        description: 'Indicates if the user is actively accepting crowdsourced delivery tasks.' 
      }
    ]
  };
  