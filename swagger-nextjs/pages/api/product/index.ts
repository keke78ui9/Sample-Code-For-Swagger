// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import ProductService from '../../../lib/productService';

/** 
 * @swagger 
 * /api/product:
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
  
  if (req.method === 'GET') {
    res.status(200).json(ProductService.Instance()
    .getAllProducts());
  }
  else if (req.method === 'POST') {
    res.status(200).json(
      ProductService.Instance()
      .addProduct(req.body));
      ;
  }  
}
