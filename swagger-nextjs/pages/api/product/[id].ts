import type { NextApiRequest, NextApiResponse } from 'next';
import ProductService from '../../../lib/productService';

/** 
 * @swagger 
 * /product/{id}:
 *   get: 
 *      tags:
 *          - Products
 *      description: Get Product by ID
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            description: Product ID
 *            in: path
 *            required: true
 *            trype: integer
 *      responses:  
 *          200: 
 *              description: Success  
 */ 

/** 
 * @swagger 
 * /product/{id}:
 *   delete: 
 *     tags:
 *          - Products
 *     description: remove product by id
 *     parameters:
 *          - name: id
 *            description: Product ID
 *            in: path
 *            required: true
 *            trype: integer
 *     responses:  
 *          200: 
 *              description: Success  
 */ 

/** 
 * @swagger 
 * /product/{id}:
 *   put: 
 *     tags:
 *          - Products 
 *     description: update product by id
 *     parameters:
 *          - name: id
 *            description: Product ID
 *            in: path
 *            required: true
 *            trype: integer
 *          - name: product
 *            description: Product Object
 *            in: body
 *            required: true
 *            schema:
 *               $ref: '#/definitions/Product'
 *     responses:  
 *          200: 
 *              description: Success  
 */ 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  
  const {query} = req;

  if (req.method === 'DELETE') {
    res.status(200).json(
      ProductService.Instance()
      .deleteProduct(+query.id));
      ;
  }
  else if (req.method === 'GET') {
    res.status(200).json(
      ProductService.Instance()
      .getProductById(+query.id))
      ;
  }  
  else if (req.method === 'PUT') {
    res.status(200).json(
      ProductService.Instance()
      .updateProduct(+query.id, req.body));
      ;
  }  
}
