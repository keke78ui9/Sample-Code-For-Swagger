// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import ProductService from '../../../lib/productService';

type Data = {
  name: string
}

/** 
 * @swagger 
 * /product:
 *   get: 
 *     tags:
 *          - Products
 *     description: Get all Product 
 *     responses:  
 *       200: 
 *         description: Success  
 */ 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
      
  }

  let products = new ProductService().getAllProducts(); 

  console.info('products', products);

  res.status(200).json(products);
}
