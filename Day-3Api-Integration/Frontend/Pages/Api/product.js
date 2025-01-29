// pages/api/products.js
export default async function handler(req, res) {
    const apiUrl = 'https://next-ecommerce-template-4.vercel.app/api/product';
  
    try {
      // Forward the request to the external API
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      // Return the response to your frontend
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch products' });
    }
  }
  