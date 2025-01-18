                +---------------------+       +---------------------+
                |     Customer        |       |       Vendor         |
                | (Frontend)          |       | (Frontend)           |
                +---------------------+       +---------------------+
                          |                            |
                          v                            v
                 +------------------+      +-------------------+
                 |   API Gateway     | <----> |   API Gateway     |
                 +------------------+      +-------------------+
                          |                            |
                          v                            v
         +---------------------+   +---------------------+   +---------------------+
         | Authentication API  |   |     Sanity CMS      |   |  Payment Gateway    |
         | (Clerk, Session)     |<->|   (Orders, Products)|<->| (Payments)          |
         +---------------------+   +---------------------+   +---------------------+
                          |                            |
                          v                            v
             +---------------------------+         +----------------------------+
             |      Notification API      |<------->| Geolocation API (for Location)|
             | (Order Updates, Deliveries)|         | (Tracking Users, Riders, App Users)|
             +---------------------------+         +----------------------------+
                          |                            |
                          v                            v
                   +-----------------+           +-----------------+
                   |     Rider       |           |   App User      |
                   | (Delivery Role) |           | (Crowdsourcing) |
                   +-----------------+           +-----------------+
