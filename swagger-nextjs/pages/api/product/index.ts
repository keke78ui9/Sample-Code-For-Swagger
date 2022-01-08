// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

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
  res: NextApiResponse<Data>
) {
  switch (req.method) {
      
  }

  res.status(200).json({ name: 'John Doe22' })
}
